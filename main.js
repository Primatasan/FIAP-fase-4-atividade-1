// Esse codigo busca facilitar a leitura do codigo abaixo.

const codigoFornecido = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br> </body> </html>"

const cidades = codigoFornecido.split('<b>')

// funções

function nomeCidade(x){
    let cidade = cidades[x].split('*')
    return cidade[1]
}

function roteiroA(x){
    let cidade = cidades[x].split('*')
    let roteiros = cidade[2].split('#');
    let posicaoA = roteiros[1].indexOf('>');
    let posicaoB = roteiros[1].indexOf('<', posicaoA+1);
    let listaItens = roteiros[1].substring(posicaoA+1,posicaoB);
    let itens = listaItens.split(';');
    return itens
}

function buscaRoteiroPorRegiao(x, regiao){
    let definirRoteiros = cidades[x].split('|');
    definirRoteiros.shift();
    let string = definirRoteiros.toString();
    let definirRegex = string.match(regiao);
    let testarCondicao = string.includes(definirRegex);
    if(testarCondicao){
       let contador = 0;
       while(string.indexOf(regiao) == -1){
           contador++
           break
       }
       let posicaoA = definirRoteiros[contador].indexOf('>');
       let posicaoB = definirRoteiros[contador].indexOf('<', posicaoA+1);
       let listaItens = definirRoteiros[contador].substring(posicaoA+1,posicaoB);
       let itens = listaItens.split(';');
       return itens
    } else {
        return 'A região não existe em seu destino'
    }
}


//resultados

//nome das cidades

document.querySelector('#primeira').textContent = nomeCidade(1);
document.querySelector('#segunda').textContent = nomeCidade(2);
document.querySelector('#terceira').textContent = nomeCidade(3);

let nomeDasCidades = [nomeCidade(1), nomeCidade(2), nomeCidade(3)]

// roteiros A das cidades

document.querySelector('#roteiroprimeiracidade').textContent = `O roteiro 'A' da cidade de ${nomeCidade(1)} é: ${roteiroA(1)}. Ele tem ${roteiroA(1).length} atrações`
document.querySelector('#roteirosegundacidade').textContent = `O roteiro 'A' da cidade de ${nomeCidade(2)} é: ${roteiroA(2)}. Ele tem ${roteiroA(2).length} atrações`
document.querySelector('#roteiroterceiracidade').textContent = `O roteiro 'A' da cidade de ${nomeCidade(3)} é: ${roteiroA(3)}. Ele tem ${roteiroA(2).length} atrações`
let somaDeDestinos = roteiroA(1).length + roteiroA(2).length + roteiroA(2).length;
document.querySelector('#totalderoteiros').textContent = `No total, somando todos os roteiros A de todos os destinos, temos ${somaDeDestinos} atrações`

// Roteiro do centro de São Paulo

document.querySelector('#centro').textContent = buscaRoteiroPorRegiao(1,/centro/gi)

let nomeCorreto = prompt('O nome da cidade do ultimo trecho do exercicio é? Por Favor, respeite as letras maiusculas')

switch(nomeCorreto){

    case 'São Paulo':
        document.getElementById('donwtowndiv').remove()
        alert('São Paulo não possui uma região Downtown');
        break
    case 'Las Vegas':
        let ajustarArray = buscaRoteiroPorRegiao(2,/downtown/gi);
        let novaArray = ajustarArray.slice(1,4)
        document.querySelector('#downtown').textContent = novaArray;
        break
    case 'Moscou':
        document.getElementById('donwtowndiv').remove()
        alert('Moscou não possui uma região Downtown');
        break
    case 'Los Angeles':
        document.getElementById('donwtowndiv').remove()
        alert('Você não quis dizer Las Vegas? Los Angeles Não faz parte dos nossos destinos');
        break
    default:
        document.getElementById('donwtowndiv').remove()
        alert(`As cidades disponíveis são "${nomeDasCidades.toString()}". A cidade que você digitou não esta em nosso sistema. Verifique se Não ouve erro de digitação`);
        break
}











