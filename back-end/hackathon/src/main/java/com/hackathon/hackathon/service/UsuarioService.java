package com.hackathon.hackathon.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.hackathon.model.Avaliacao;
import com.hackathon.hackathon.model.Usuario;
import com.hackathon.hackathon.repository.AvaliacaoRepository;
import com.hackathon.hackathon.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repositoryUsuario;

	@Autowired
	private AvaliacaoRepository repositoryAvaliacao;

	// Salva um novo usuario
	public Usuario novoUsuario(Usuario novoUsuario) {
		return repositoryUsuario.save(novoUsuario);
	}

	public Optional<?> mudarUsuario(Usuario mudarUsuario) {

		return repositoryUsuario.findById(mudarUsuario.getId_usuario()).map(usuarioExistente -> {
			Optional<Usuario> usuarioExistente2 = repositoryUsuario.findByEmail(mudarUsuario.getEmail());

			if (usuarioExistente2.isPresent()) {
				return Optional.empty();
			} else {

				usuarioExistente.setEmail(mudarUsuario.getEmail());
				usuarioExistente.setNome(mudarUsuario.getNome());
				usuarioExistente.setSenha(mudarUsuario.getSenha());

				return Optional.ofNullable(repositoryUsuario.save(usuarioExistente));
			}
		}).orElseGet(() -> {
			return Optional.empty();
		});
	}

	
	// Fazer avaliação.
	
	public Optional<Object> fazerAvaliacao(Avaliacao novaAvaliacao) {
		
		repositoryAvaliacao.save(novaAvaliacao);
		
		Optional<Usuario> usuario = repositoryUsuario.findById(novaAvaliacao.getIdUsuario());
		
		System.out.println(usuario.get().getNome());
		
		Long num = novaAvaliacao.getId_avaliacao();
		
		usuario.get().setIdAvaliacao(num);
		
		repositoryUsuario.save(usuario.get());
		
		return Optional.ofNullable(novaAvaliacao);

	}

}