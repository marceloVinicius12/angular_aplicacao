namespace Mv_school_API.models
{
    public class disciplina
    {
        public disciplina(){}
        public disciplina(int id, string nome, int professorId, Professor professor)
        {
            this.id = id;
            this.nome = nome;
            this.ProfessorId = professorId;
            this.Professor = professor;

        }
        public int id { get; set; }
        public string nome { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }

    }
}