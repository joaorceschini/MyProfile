const tagBDiscord = document.querySelector('b.cursor-help#discord')
const tagBEmail = document.querySelector('b.cursor-help#email')
const tagBGithub = document.querySelector('b.cursor-help#github')

function AlertEvent(tag, event, text) {
  tag.addEventListener(event, () => {
    alert(text)
  })
}

AlertEvent(
  tagBDiscord,
  "click",
  "Para conversar comigo no discord, mande pedido de amizade para a tag: jr'#2021 ou poderá me achar no servidor da Hcode na aba #Contatos."
)

AlertEvent(
  tagBEmail,
  "click",
  "Envie um email para mim, faça isso clicando em meu email na aba #Contato."
)

AlertEvent(
  tagBGithub,
  "click",
  "Acesse meu github e veja as sources dos meus projetos. Pode ajudar seguindo, compartilhando e adicionando uma estrela nos que mais gostar!"
)