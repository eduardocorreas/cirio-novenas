export default function showMusic(code) {
  switch (code) {
    case 'QUEM_E_ESTA':
      return `<pre>       <b>C</b>        <b>G</b>            <b>Am</b>    <b>F</b>
Quem é Esta que avança como Aurora
<b>C</b>         <b>G</b>                   <b>Am</b>   <b>F</b>
Temível como exército em ordem de batalha
  <b>C</b>            <b>G</b>         <b>Am</b>   <b>F</b>
Brilhante como o sol e como a lua
  <b>C</b>          <b>G</b>                 <b>Am</b>  <b>F</b>
Mostrando os caminhos aos filhos seus
        <b>C</b>         <b>G</b>                   <b>Am</b>   <b>F</b>
Ah, ah, ah, minha alma glorifica ao Senhor
<b>C</b>        <b>G</b>     <b>Am</b> <b>F</b>
Meu Espírito exulta
<b>C</b>     <b>G</b>            <b>Am</b>   <b>F</b>
Em Deus, meu Salvador</pre>`;

    case 'O_CEU_SE_ABRE':
      return `<pre><b class="js-modal-trigger">B9</b>     <b>B7M</b>             <b>D#m</b>
Hoje o céu se abre pra derramar
          <b>E</b>               <b>B9</b>       <b>A</b>    <b>F#</b>
Sobre os corações toda a graça do Pai
<b>B9</b>     <b>B7M</b>         <b>D#m</b>
Eu também quero me derramar
        <b>E</b>       <b class="js-modal-trigger">C#m</b>               <b>A</b>     <b>F#</b>
De todo o meu coração    nos braços do Pai
      
<strong>      
<b>B9</b> <b>B7M</b>            <b>E</b>            <b>G#m</b>
Vem,        Espírito Santo,   com teu poder
<div class="player_teads"></div>
  <b>F#</b>                  <b>E</b>
Tocar meu ser,     fluir em mim
</strong>
      
<b>G#m</b>               <b>E</b>
Hoje eu posso ser um novo homem
      <b>B9</b>            <b>F#</b>
Pelo teu poder renascer
      
[Refrão]
      
<b>B9</b> <b>B7M</b>                <b>E</b>                     <b>G#m</b>
Vem,        Espírito Santo,       com teu poder
 <b>F#</b>                 <b>E</b>
Tocar meu ser,     fluir em mim</pre>`;
    default:
      return 'Selecione uma música';
  }
}
