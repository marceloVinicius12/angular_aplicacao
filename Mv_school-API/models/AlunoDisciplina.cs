namespace Mv_school_API.models
{
    public class AlunoDisciplina
    {
        public AlunoDisciplina()
        {

        }
        public AlunoDisciplina(int alunoId, Aluno aluno, int disciplinaId )
        {
            this.AlunoId = alunoId;   
            this.DisciplinaId = disciplinaId;

              }
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }
        public int DisciplinaId { get; set; }
        public disciplina Disciplina { get; set; }

    }
}