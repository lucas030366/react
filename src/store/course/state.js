const state = {
  active_lesson: {},
  active_module: {},
  modules: [
    {
      id: 1,
      title: "Iniciando em React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" }
      ]
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    }
  ]
}

export default state