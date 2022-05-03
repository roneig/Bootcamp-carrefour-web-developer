package me.dio.academia.digital.controller;

import me.dio.academia.digital.entity.Aluno;
import me.dio.academia.digital.entity.AvaliacaoFisica;
import me.dio.academia.digital.entity.DTO.AlunoRespostaDTO;
import me.dio.academia.digital.entity.form.AlunoForm;
import me.dio.academia.digital.entity.form.AlunoUpdateForm;
import me.dio.academia.digital.service.impl.AlunoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoServiceImpl service;

    //  @PostMapping
//  public Aluno create(@Valid @RequestBody AlunoForm form) {
//    return service.create(AlunoRespostaDTO.transformaEmDTO(form));
//  }
//  Exercicio padrao DTO.
//  para fins didaticos, considera o cpf uma informação sensivel e não devolve ela na resposta.
    @PostMapping
    public AlunoRespostaDTO create(@Valid @RequestBody AlunoForm form) {
        Aluno aluno = service.create(form);
        return AlunoRespostaDTO.transformaEmDTO(aluno);
    }

    @GetMapping("/avaliacoes/{id}")
    public List<AvaliacaoFisica> getAllAvaliacaoFisicaId(@PathVariable Long id) {
        return service.getAllAvaliacaoFisicaId(id);
    }

//    @GetMapping
//    public List<Aluno> getAll(@RequestParam(value = "dataDeNascimento", required = false)
//                              String dataDeNacimento) {
//        return service.getAll(dataDeNacimento);
//    }

    @GetMapping
    public List<AlunoRespostaDTO> getAll(@RequestParam(value = "dataDeNascimento", required = false)
                                         String dataDeNacimento) {
        return (service.getAll(dataDeNacimento)
                .stream()
                .map(this::transformaListEmDTO)
                .collect(Collectors.toList()));
    }

    private AlunoRespostaDTO transformaListEmDTO(Aluno aluno) {
        return new AlunoRespostaDTO(
                aluno.getId(),
                aluno.getNome(),
                aluno.getBairro(),
                aluno.getDataDeNascimento());
    }


    @GetMapping("/{id}")
    public Aluno get(@PathVariable Long id) {

        return service.get(id);
    }

    //  Exercicio padrao DTO.
//  para fins didaticos, considera o cpf uma informação sensivel e não devolve ela na resposta.
    @PutMapping("/{id}")
    public AlunoRespostaDTO update(@PathVariable Long id, @Valid @RequestBody AlunoUpdateForm formUpdate) {
        //return service.update(id, formUpdate);
        Aluno aluno = service.update(id, formUpdate);
        return AlunoRespostaDTO.transformaEmDTO(aluno);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
