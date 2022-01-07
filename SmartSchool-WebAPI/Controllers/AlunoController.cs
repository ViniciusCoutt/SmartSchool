using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IRepository _repository;

        public AlunoController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repository.GetAllAlunosAsync(true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetByAlunoId(int AlunoId)
        {
            try
            {
                var result = await _repository.GetAlunoAsyncById(AlunoId, true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("ByDisc/{disciplinaId}")]
        public async Task<IActionResult> GetByDisciplinaId(int disciplinaId)
        {
            try
            {
                var result = await _repository.GetAlunosAsyncByDisciplinaId(disciplinaId, false);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> post(Aluno model)
        {
            try
            {
                _repository.Add(model);

                if (await _repository.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{alunoId}")]
        public async Task<IActionResult> put(int alunoId, Aluno model)
        {
            try
            {
                var aluno = await _repository.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound();

                _repository.Update(model);

                if (await _repository.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{alunoId}")]
        public async Task<IActionResult> delete(int alunoId)
        {
            try
            {
                var aluno = await _repository.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound();

                _repository.Delete(aluno);

                if (await _repository.SaveChangesAsync())
                {
                    return Ok("Deletado");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

    }

}