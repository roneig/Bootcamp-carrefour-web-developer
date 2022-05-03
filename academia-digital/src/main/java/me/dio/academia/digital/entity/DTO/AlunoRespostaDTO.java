package me.dio.academia.digital.entity.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import me.dio.academia.digital.entity.Aluno;
import java.time.LocalDate;

@AllArgsConstructor
@Getter
public class AlunoRespostaDTO {

    private Long id;
    private String nome;
    private String bairro;
    private LocalDate dataDeNascimento;

    public static AlunoRespostaDTO transformaEmDTO(Aluno aluno) {
        return new AlunoRespostaDTO(
                aluno.getId(),
                aluno.getNome(),
                aluno.getBairro(),
                aluno.getDataDeNascimento());
    }
}