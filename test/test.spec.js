const assert = require('chai').assert;
global.window = global;

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockdatabase.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    path => path ? mockdatabase.child(path) : mockdatabase,
    () => mockauth
);

require("../src/js/test");

describe(
    "Modelo de la lista de mensajes",// se empieza por lo general
    () => {
        describe(
            "La lista, me debería permitir agregar mensajes",
            () => {
                it("Debería agregar un mensaje",
                    (done) => {
                        addTask("mandar un holi").then(
                            (task) => {
                                return getTaskList();
                            }
                        ).then(
                            (taskList) => {
                                const sendMsn = Object.entries(taskList.val())
                                    .find(
                                        task => {
                                            return task[1].message == "mandar un holi";
                                        }
                                    );
                                assert.exists(sendMsn[1]);//verifica que exista algo en particular en el código una función
                                assert.equal(sendMsn[1].title, "mandar un holi");
                                done();
                            }
                        ).catch(
                            (error) => {
                                done(error);
                            }
                        )
                    }
                );
            }
        );

        describe(
            "La lista, me debería permitir ver los mensajes de mis contactos",
            () => {
                it("Debería permitir escribir a un contacto",
                    (done) => { //parametros de la función
                        taskProgress("mandar un holi", "se ha mandado un holi").then(
                            (task) => {
                                assert.exists(task);
                                assert.equal(task.message, "mandar un holi");
                                assert.equal(task.state, "se ha mandado un holi");
                                done();
                            }
                        ).catch(
                            (error) => {
                                done(error);
                            }
                        );
                    })
            }
        );

       /* describe(
            "La lista, me debería permitir editar una tarea",
            () => {
            }
        );

        describe(
            "La lista, me debería permitir borrar una tarea",
            () => {

            }
        );*/
    }
);
