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
    default:
      return 'Selecione uma música';
  }
}
