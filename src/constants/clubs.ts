import { Squad, Clubs } from "../types/typing";

const clubs: Clubs = {
  flamengo:
    "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/escudos/1524865930.png",
  fluminense:
    "https://assets-fluminense.s3.amazonaws.com/assets/fluminense-d99518426e66fb3576697742f31b8b1d2b8b53d34f409072c52711764f1bdf32.svg",
  palmeiras:
    "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg",
  corinthians:
    "https://logodetimes.com/times/corinthians/logo-corinthians-256.png",
  atletico_mineiro:
    "https://atletico.com.br/wp-content/uploads/2022/01/atletico.svg",
  brazil: "../../assets/icons/cbf_small.png",
};

const squads: Squad = {
  flamengo: [
    {
      name: "Santos",
      num: 1,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/santos_bkb964.png",
      pos: "G",
    },
    {
      name: "Matheuzinho",
      short_name: "Matheuzinho",
      apelido: "Matheus França Silva",
      num: 34,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823393/flamengo_new/matheuzinho_ghhn3k.png",
      pos: "LD",
    },
    {
      name: "Guilhermo Varela",
      short_name: "Varela",
      num: 2,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/varela_jiubq2.png",
      pos: "LD",
    },
    {
      name: "Rodrigo Caio",
      short_name: "R. Caio",
      num: 3,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/caio_m8akvq.png",
      pos: "D",
    },
    {
      name: "David Luiz",
      short_name: "D. Luiz",
      num: 23,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823393/flamengo_new/davidluiz_tlgtmt.png",
      pos: "D",
    },
    {
      name: "Léo Pereira",
      short_name: "L. Pereira",
      apelido: "trepa",
      num: 4,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823393/flamengo_new/leopereira_sjcb2e.png",
      pos: "D",
    },

    {
      name: "Ayrton Lucas",
      short_name: "A. Lucas",
      apelido: "beijinho",
      num: 6,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/ayrtonlucas_n0rezw.png",
      pos: "LE",
    },
    {
      name: "Filipe Luis",
      short_name: "F. Luis",
      num: 16,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/filipeluis_sho8i7.png",
      pos: "LE",
    },
    {
      name: "Gerson",
      apelido: "Coringa vapo",
      num: 20,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/gerson_bw16r0.png",
      pos: "MC",
    },
    {
      name: "Thiago Maia",
      short_name: "T. Maia",
      num: 8,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/tmaia_kvduft.png",
      pos: "MD",
    },
    {
      name: "A. Vidal",
      short_name: "Vidal",
      apelido: "Arturo Vidal",
      num: 32,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/vidal_luvygz.png",
      pos: "MD",
    },
    {
      name: "Éverton Ribeiro",
      short_name: "É. Ribeiro",
      apelido: "miteiro",
      num: 7,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/evertonribeiro_nt9dab.png",
      pos: "MA",
    },
    {
      name: "Matheus Gonçalves",
      short_name: "M. Gonçalves",
      num: 40,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680741410/flamengo_new/mgoncalves_z4ektt.png",
      pos: "MA",
    },
    {
      name: "De Arrascaeta",
      short_name: "Arrascaeta",
      apelido: "Giorgian de Arrascaeta",
      num: 14,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/arrasca_ikfu3f.png",
      pos: "MA",
    },
    {
      name: "Gabriel",
      short_name: "Gabigol",
      apelido: "Gabriel Gabigol Barbosa",
      num: 10,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/gabigol_kn7fm0.png",
      pos: "A",
    },
    {
      name: "Pedro",
      apelido: "Pedro queixada Guilherme",
      num: 9,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/pedro_crxzjx.png",
      pos: "A",
    },
    {
      name: "Bruno Henrique",
      short_name: "B. Henrique",
      apelido: "Speed Wonder",
      num: 27,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/brunohenrique_z6mpb0.png",
      pos: "A",
    },
    {
      name: "Cebolinha",
      short_name: "Cebolinha",
      apelido: "Éverton Cebola",
      num: 19,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/cebolinha_pgp8xk.png",
      pos: "PE",
    },

    {
      name: "Fabricio Bruno",
      short_name: "F. Bruno",
      num: 15,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823393/flamengo_new/fabriciobruno_k0gzkk.png",
      pos: "D",
    },
    {
      name: "Pablo",
      apelido: "Pablo do Nascimento Castro",
      num: 30,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823393/flamengo_new/pablo_qcwtdw.png",
      pos: "D",
    },

    {
      name: "Hugo Souza",
      short_name: "Hugo",
      apelido: "Neneca",
      num: 45,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/hugo_cqvi7c.png",
      pos: "G",
    },
    {
      name: "Matheus França",
      short_name: "M. França",
      apelido: "Matheus França de Oliveira",
      num: 42,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/mfranca_yby8sm.png",
      pos: "MA",
    },

    {
      name: "Vitor Hugo",
      short_name: "V. Hugo",
      num: 29,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/vitorhugo_m7ye2x.png",
      pos: "MA",
    },
    {
      name: "Erick Pulgar",
      short_name: "E. Pulgar",
      num: 5,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823394/flamengo_new/pulgar_rdnsaw.png",
      pos: "MD",
    },
    {
      name: "Matheus Cunha",
      short_name: "M. Cunha",
      num: 51,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823395/flamengo_new/mcunha_hhltdm.png",
      pos: "G",
    },
    {
      name: "Cleiton",
      num: 33,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680823393/flamengo_new/cleiton_eopb7g.png",
      pos: "D",
    },
    {
      name: "Mateus Lima",
      short_name: "Mateusão",
      num: 46,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680741412/flamengo_new/mateusao_r0o6gz.png",
      pos: "A",
    },
    {
      name: "Wesley França",
      short_name: "Wesley",
      num: 43,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1683045034/flamengo/wesley_is9trh.png",
      pos: "LD",
    },
    {
      name: "Igor Jesus",
      short_name: "Igor",
      num: 48,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1683062182/flamengo/igor-jesus-1_xgkzri.png",
      pos: "MD",
    },
    {
      name: "Agustin Rossi",
      short_name: "Rossi",
      num: 17,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1686705910/flamengo/agustin_rossi_1_nejgkz.png",
      pos: "G",
    },
    {
      name: "Luiz Araujo",
      short_name: "L. Araújo",
      num: 22,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1686703571/flamengo/luiz_araujo_jzn8oy.png",
      pos: "PD",
    },
    {
      name: "Allan",
      pos: "MD",
      num: 21,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1688274928/flamengo/ALLAN_o6zxnk.png",
    },
  ],
  palmeiras: [
    {
      name: "Weverton",
      short_name: "Weverton",
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Weverton-8_ak3x0v.png",
      num: 21,
    },
    {
      name: "Vinicius Silvestre",
      short_name: "Vinicius",
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Vinicius-10_kdng3b.png",
      num: 1,
    },
    {
      name: "Marcelo Lomba",
      short_name: "M. Lomba",
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Lomba_gxonkh.png",
      num: 42,
    },
    {
      name: "Gustavo Gómez",
      short_name: "G. Gómez",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Gomez_ukvdq9.png",
      num: 15,
    },
    {
      name: "Murilo",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Murilo-3_arlhcw.png",
      num: 26,
    },
    {
      name: "Luan",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Luan-10_wihndp.png",
      num: 13,
    },
    {
      name: "Naves",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680820722/palmeiras/Naves-_zawlxd.png",
      num: 34,
    },
    {
      name: "Joaquín Piquerez",
      short_name: "J. Piquerez",
      pos: "LE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/Piquerez-1_eohggp.png",
      num: 22,
    },
    {
      name: "Vanderlan",
      pos: "LE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/Vanderlan_tr6tit.png",
      num: 6,
    },
    {
      name: "Marcos Rocha",
      short_name: "M. Rocha",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/marcos-rocha-1-2_zdndqf.png",
      pos: "LD",
      num: 2,
    },
    {
      name: "Mayke",
      pos: "LD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/MAYKE-9_o4ulpr.png",
      num: 12,
    },
    {
      name: "Garcia",
      pos: "LD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/GARCIA_hyltno.png",
      num: 32,
    },
    {
      name: "Jailson",
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/JAILSON-4_xcrgwj.png",
      num: 30,
    },
    {
      name: "Fabinho",
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/FABINHO_r4qbmb.png",
      num: 35,
    },
    {
      name: "Gabriel Menino",
      short_name: "G. Menino",
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/Gabriel-Menino-9_z0uhct.png",
      num: 25,
    },
    {
      name: "Zé Rafael",
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/Ze-Rafael-1-2_b0yi6o.png",
      num: 8,
    },
    {
      name: "Eduard Atuesta",
      short_name: "E. Atuesta",
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/ATUESTA-3_yvjyl4.png",
      num: 20,
    },
    {
      name: "Richard Ríos",
      short_name: "R. Ríos",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819422/palmeiras/Richard_enrrrd.png",
      pos: "MD",
      num: 27,
    },
    {
      name: "Raphael Veiga",
      short_name: "R. Veiga",
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819421/palmeiras/Veiga_uukszf.png",
      num: 23,
    },
    {
      name: "Jhon Jhon",
      short_name: "Jhon",
      num: 40,
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819421/palmeiras/JHON-JHON_hez4zv.png",
    },
    {
      name: "Dudu",
      num: 7,
      pos: "PE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819421/palmeiras/DUDU-8_gmk8tt.png",
    },
    {
      num: 19,
      name: "Breno Lopes",
      short_name: "B. Lopes",
      pos: "PE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819421/palmeiras/Breno-Lopes-11_wxed8p.png",
    },
    {
      num: 14,
      name: "Artur",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819421/palmeiras/Artur-SITE_vj4hhr.png",
    },
    {
      num: 17,
      name: "Giovani",
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819424/palmeiras/GIOVANI_wbtseq.png",
    },
    {
      name: "Bruno Tabata",
      short_name: "B. Tabata",
      num: 11,
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Tabata-1_rg2idj.png",
    },
    {
      num: 16,
      name: "Endrick",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/Endrick_f8ntan.png",
    },
    {
      num: 10,
      name: "Rony",
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819421/palmeiras/Rony-12_uhg552.png",
    },
    {
      num: 18,
      name: "Manuel López",
      short_name: "López",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/LOPEZ-2_ftb3e1.png",
    },
    {
      num: 29,
      name: "Rafael Navarro",
      short_name: "R. Navarro",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680819423/palmeiras/NAVARRO-2_fhwa4p.png",
    },
  ],

  corinthians: [
    {
      name: "Matheus Donelli",
      short_name: "Donelli",
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/Donelli_qks5t3.png",
      num: 32,
    },
    {
      name: "Cássio",
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/cassio_t66kim.png",
      num: 12,
    },
    {
      name: "Carlos Miguel",
      short_name: "C. Miguel",
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/carlos_miguel_d4flax.png",
      num: 22,
    },
    {
      name: "Fabián Balbuena",
      short_name: "Balbuena",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848307/corinthians/Balbuena_lct78u.png",
      num: 31,
    },
    {
      name: "Bruno Méndez",
      short_name: "B. Méndez",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848307/corinthians/bruno_mendez_oy4skn.png",
      num: 25,
    },
    {
      name: "Gil",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848307/corinthians/gil_zrqak2.png",
      num: 4,
    },
    {
      name: "Caetano",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848307/corinthians/caetano_t6elyd.png",
      num: 14,
    },
    {
      name: "Murillo",
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/Murillo_javxyc.png",
      num: 34,
    },
    {
      name: "Matheus Bidu",
      short_name: "M. Bidu",
      pos: "LE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848307/corinthians/matheus_bidu_mlrna2.png",
      num: 21,
    },
    {
      name: "Fábio Santos",
      short_name: "F. Santos",
      pos: "LE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848307/corinthians/fabio_santos_dwos4n.png",
      num: 6,
    },
    {
      name: "Fagner",
      pos: "LD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/fagner_o18n5x.png",
      num: 23,
    },
    {
      name: "Rafael Ramos",
      short_name: "R. Ramos",
      pos: "LD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/rafael_ramos_reid5k.png",
      num: 2,
    },
    {
      name: "Fausto Vera",
      short_name: "F. Vera",
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/fausto_vera_amv3mx.png",
      num: 5,
    },
    {
      name: "Roni",
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/roni_nrwxef.png",
      num: 29,
    },
    {
      name: "Víctor Cantillo",
      short_name: "Cantillo",
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/cantillo_ssej6n.png",
      num: 24,
    },
    {
      name: "Maycon",
      pos: "MC",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/maycon_sj03oa.png",
      num: 7,
    },
    {
      name: "Du Queiroz",
      pos: "MC",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/du_queiroz_qsoepg.png",
      num: 37,
    },
    {
      name: "Renato Augusto",
      short_name: "R. Augusto",
      pos: "MC",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/renato_augusto_gyjhuk.png",
      num: 8,
    },
    {
      name: "Paulinho",
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/paulinho_y0qxsp.png",
      num: 15,
    },
    {
      name: "Adson",
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/adson_haf8ns.png",
      num: 28,
    },
    {
      name: "Giuliano",
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/giuliano_xomd5d.png",
      num: 20,
    },
    {
      name: "Róger Guedes",
      short_name: "R. Guedes",
      pos: "PE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/roger_guedes_ny7zym.png",
      num: 10,
    },
    {
      name: "Ángel Romero",
      short_name: "Romero",
      pos: "PE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/romero_ol3o3i.png",
      num: 11,
    },
    {
      name: "Gustavo Mosquito",
      short_name: "Mosquito",
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/gustavo_silva_cfz1cr.png",
      num: 19,
    },
    {
      name: "Chrystian Barletta",
      short_name: "Barletta",
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/barletta_yahzjv.png",
      num: 77,
    },
    {
      name: "Yuri Alberto",
      short_name: "Y. Alberto",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680849886/corinthians/yuri_alberto_k4lmmu.png",
      num: 9,
    },
    {
      name: "Júnior Moraes",
      short_name: "J. Moraes",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848309/corinthians/junior_moraes_fr6pvx.png",
      num: 18,
    },
    {
      name: "Giovane",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/giovane_jqxr6l.png",
      num: 17,
    },
    {
      name: "Ruan Oliveira",
      short_name: "Ruan",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/ruan_oliveira_upq8hr.png",
      num: 99,
      pos: "MA",
    },
    {
      name: "Matheus Araujo",
      short_name: "M. Araujo",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680848308/corinthians/matheus_araujo_rrb2jt.png",
      num: 30,
      pos: "MA",
    },
  ],
  atletico_mineiro: [
    {
      name: "Everson",
      pos: "G",
      num: 22,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Everson_jpdfex.png",
    },
    {
      name: "Matheus Mendes",
      short_name: "M. Mendes",
      pos: "G",
      num: 31,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900773/atletico_mineiro/Matheus-Mendes_bqnfxe.png",
    },
    {
      name: "Gabriel Delfim",
      short_name: "G. Delfim",
      pos: "G",
      num: 1,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Gabriel-Delfim_d2uswq.png",
    },
    {
      name: "Nathan Silva",
      short_name: "N. Silva",
      pos: "D",
      num: 40,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900773/atletico_mineiro/Nathan_Silva_thgqta.png",
    },
    {
      name: "Igor Rabello",
      short_name: "I. Rabello",
      pos: "D",
      num: 16,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900773/atletico_mineiro/Igor_Rabello_y1g2m3.png",
    },
    {
      name: "Jemerson",
      pos: "D",
      num: 34,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Jemerson_igqakp.png",
    },
    {
      name: "Bruno Fuchs",
      short_name: "B. Fuchs",
      pos: "D",
      num: 3,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Bruno_Fuchs_rllqdo.png",
    },
    {
      name: "Mauricio Lemos",
      short_name: "M. Lemos",
      pos: "D",
      num: 28,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Lemos_wtmxuv.png",
    },
    {
      name: "Réver",
      pos: "D",
      num: 4,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Rever_ns03qj.png",
    },
    {
      name: "Guilherme Arana",
      short_name: "G. Arana",
      apelido: "Aranha",
      pos: "LE",
      num: 13,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Arana_gzsivn.png",
    },
    {
      name: "Dodô",
      pos: "LE",
      num: 6,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Dodo_bgoqaa.png",
    },
    {
      name: "Renzo Saravia",
      pos: "LD",
      short_name: "Saravia",
      num: 26,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Saravia_wcwltn.png",
    },
    {
      name: "Mariano",
      pos: "LD",
      num: 25,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Mariano_tzlczw.png",
    },

    {
      name: "Otávio",
      pos: "MD",
      num: 5,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900773/atletico_mineiro/Otavio_bd36fs.png",
    },
    {
      name: "Rodrigo Battaglia",
      short_name: "Battaglia",
      pos: "MD",
      num: 21,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Rodrigo_Battaglia_yhvlsp.png",
    },
    {
      name: "Igor Gomes",
      short_name: "I. Gomes",
      pos: "MC",
      num: 17,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Igor_Gomes_vcyudy.png",
    },
    {
      name: "Patrick",
      pos: "MC",
      num: 49,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Patrick-removebg-preview_c0dtnv.png",
    },
    {
      name: "Edenilson",
      pos: "MC",
      num: 8,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Edenilson_nb2nln.png",
    },
    {
      name: "Matías Zaracho",
      short_name: "Zaracho",
      pos: "MA",
      num: 15,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Zaracho_kiumyl.png",
    },
    {
      name: "Rubens",
      pos: "MA",
      num: 44,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Rubens_yzduhg.png",
    },
    {
      name: "Hyoran",
      pos: "MA",
      num: 20,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900773/atletico_mineiro/Hyoran_dwmel2.png",
    },
    {
      name: "Nathan",
      pos: "MA",
      num: 33,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Nathan_rm6cyp.png",
    },
    {
      name: "Paulinho",
      pos: "PE",
      num: 10,
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Paulinho_m6itat.png",
    },
    {
      name: "Cristian Pavón",
      short_name: "Pavón",
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Rodrigo_Battaglia_yhvlsp.png",
      num: 9,
    },
    {
      name: "Pedrinho",
      num: 38,
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Pedrinho_z1bfru.png",
    },
    {
      name: "Hulk",
      num: 7,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900773/atletico_mineiro/Hulk_btvpsg.png",
    },
    {
      name: "Vargas",
      num: 11,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900772/atletico_mineiro/Vargas_ompop2.png",
    },
    {
      name: "Alan Kardec",
      num: 14,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680900771/atletico_mineiro/Alan-Kardec_sachpl.png",
    },
  ],
  fluminense: [
    {
      name: "Pedro Rangel",
      short_name: "P. Rangel",
      num: 1,
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/PEDRO-RANGEL__bd4xbr.png",
    },
    {
      name: "Fábio",
      num: 98,
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680999523/fluminense/FABIO_wajdsg.png",
    },
    {
      name: "Vitor Eudes",
      short_name: "V. Eudes",
      num: 33,
      pos: "G",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/VITOR_EUDES_kn9d6e.png",
    },
    {
      name: "Nino",
      num: 33,
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/NINO__xye1lk.png",
    },
    {
      name: "Vitor Mendes",
      short_name: "V. Mendes",
      num: 4,
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/vitor_mendes__urybjd.png",
    },
    {
      name: "Manoel",
      num: 26,
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/MANOEL_d9mo7t.png",
    },
    {
      name: "David Braz",
      short_name: "D. Braz",
      num: 44,
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/DAVID_BR_dq5f25.png",
    },
    {
      name: "Luan Freitas",
      short_name: "L. Freitas",
      num: 40,
      pos: "D",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/LUAN_FREIT_pmnkte.png",
    },
    {
      name: "Marcelo",
      num: 12,
      pos: "LE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994597/fluminense/MARCELO__hrqrmq.png",
    },
    {
      name: "Jorge",
      num: 6,
      pos: "LE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/jorge_png_s_ivhxl5.png",
    },
    {
      name: "Guga",
      num: 23,
      pos: "LD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/GUGA_FLU__k6exlr.png",
    },
    {
      name: "Samuel Xavier",
      short_name: "S. Xavier",
      num: 2,
      pos: "LD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/SAMUEL_XAVIER_3_c85vrb.png",
    },
    {
      name: "André",
      num: 7,
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994594/fluminense/ANDRE_iwxwqv.png",
    },
    {
      name: "Alexsander",
      num: 5,
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/ALEXSANDER_oyygmj.png",
    },

    {
      name: "Thiago Santos",
      short_name: "T. Santos",
      num: 29,
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994594/fluminense/THIAGO_SANTO_nokse6.png",
    },
    {
      name: "Felipe Melo",
      short_name: "F. Melo",
      num: 30,
      pos: "MD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/FELIPE_MELO__jsb0fb.png",
    },
    {
      name: "Martinelli",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994596/fluminense/MARTINELLI__pn6hwr.png",
      num: 8,
      pos: "MC",
    },
    {
      name: "Gabriel Pirani",
      short_name: "G. Pirani",
      num: 20,
      pos: "MC",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994594/fluminense/pirani_lsy0l6.png",
    },
    {
      name: "Lima",
      num: 45,
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/LIMA_hsxzp2.png",
    },
    {
      name: "Ganso",
      num: 10,
      pos: "MA",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/PH_GANSO_3_yhzyjo.png",
    },
    {
      name: "Jhon Arias",
      short_name: "J. Arias",
      num: 21,
      pos: "PE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994594/fluminense/JHON_ARIAS_ban9gz.png",
    },
    {
      name: "Keno",
      num: 11,
      pos: "PE",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/KENO_y8m94k.png",
    },
    {
      name: "Marrony",
      num: 38,
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/MARRONY_ft0b1p.png",
    },
    {
      name: "Giovanni",
      num: 37,
      pos: "PD",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994594/fluminense/GIOVANNI_MANSON__rs72ll.png",
    },
    {
      name: "John Kennedy",
      short_name: "J. Kennedy",
      num: 9,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/JHON_KENNEDY_tr7b9u.png",
    },
    {
      name: "Germán Cano",
      short_name: "Cano",
      num: 14,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/CANO_hkznpn.png",
    },
    {
      name: "Lelê",
      num: 99,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/LELE_nbyedw.png",
    },
    {
      name: "Alan",
      num: 18,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/ALAN_eruqnb.png",
    },
    {
      name: "Alexandre Jesus",
      short_name: "A. Jesus",
      num: 19,
      pos: "A",
      img: "https://res.cloudinary.com/raphaelmmachado/image/upload/v1680994595/fluminense/ALEXANDRE_JESUS_shye7u.png",
    },
  ],

  //   selecao: [
  //     {
  //       name: "Neymar Jr",
  //       short_name: "Neymar",
  //       apelido: "Neymar Menino Ney Júnior",
  //       num: 10,
  //       img: neymar,
  //       pos: "A",
  //     },
  //     {
  //       name: "Vinicius Junior",
  //       short_name: "Vinicius",
  //       apelido: "Vini Jr Malvadeza",
  //       num: 18,
  //       img: vini,
  //       pos: "P",
  //     },
  //     {
  //       name: "Antony",
  //       short_name: "Antony",
  //       apelido: "Antony",
  //       num: 77,
  //       img: antony,
  //       pos: "P",
  //     },
  //     {
  //       name: "Richarlison",
  //       apelido: "Pombo",
  //       short_name: "Richarlison",
  //       num: 7,
  //       img: richarlison,
  //       pos: "A",
  //     },
  //     {
  //       name: "L. Paquetá",
  //       apelido: "Paquetá",
  //       short_name: "Paquetá",
  //       num: 17,
  //       img: paqueta,
  //       pos: "MA",
  //     },
  //     {
  //       name: "Casemiro",
  //       apelido: "Case",
  //       short_name: "Casemiro",
  //       num: 5,
  //       img: casemiro,
  //       pos: "MD",
  //     },
  //     {
  //       name: "Fred",
  //       short_name: "Fred",
  //       apelido: "Fred",
  //       num: 8,
  //       img: fred,
  //       pos: "MD",
  //     },
  //     {
  //       name: "Raphinha",
  //       apelido: "Raphinha",
  //       short_name: "Raphinha",
  //       num: 22,
  //       img: raphinha,
  //       pos: "P",
  //     },
  //     {
  //       name: "Gerson",
  //       apelido: "Coringa Vapo",
  //       short_name: "Gerson",
  //       num: 96,
  //       img: gerson,
  //       pos: "MA",
  //     },
  //     {
  //       name: "Alex Sandro",
  //       short_name: "A. Sandro",
  //       num: 6,
  //       img: alexSandro,
  //       pos: "LE",
  //     },
  //     {
  //       name: "Alex Telles",
  //       short_name: "A. Telles",
  //       num: 36,
  //       img: alextelles,
  //       pos: "LE",
  //     },
  //     {
  //       name: "Alisson Becker",
  //       short_name: "Alisson",
  //       num: 1,
  //       img: alisson,
  //       pos: "G",
  //     },
  //     {
  //       name: "G. Arana",
  //       short_name: "Arana",
  //       apelido: "Aranha",
  //       num: 46,
  //       img: arana,
  //       pos: "LE",
  //     },
  //     {
  //       name: "B. Guimarães",
  //       short_name: "B. Guimarães",

  //       num: 28,
  //       img: brunoguimaraes,
  //       pos: "MA",
  //     },
  //     {
  //       name: "P. Coutinho",
  //       short_name: "Coutinho",

  //       num: 11,
  //       img: coutinho,
  //       pos: "MA",
  //     },
  //     {
  //       name: "Matheus Cunha",
  //       short_name: "M. Cunha",
  //       num: 79,
  //       img: cunha,
  //       pos: "A",
  //     },
  //     {
  //       name: "Daniel Alves",
  //       apelido: "Dani",
  //       short_name: "D. Alves",
  //       num: 66,
  //       img: danielalves,
  //       pos: "LD",
  //     },
  //     {
  //       name: "Danilo",
  //       short_name: "Danilo",
  //       num: 68,
  //       img: danilosantos,
  //       pos: "MD",
  //     },
  //     {
  //       name: "Ederson",
  //       short_name: "Ederson",
  //       num: 23,
  //       img: ederson,
  //       pos: "G",
  //     },
  //     {
  //       name: "Fabinho",
  //       short_name: "Fabinho",
  //       num: 15,
  //       img: fabinho,
  //       pos: "MD",
  //     },
  //     {
  //       name: "G. Magalhães",
  //       short_name: "G. Magalhães",
  //       num: 52,
  //       img: magalhaes,
  //       pos: "D",
  //     },
  //     {
  //       name: "Marquinhos",
  //       short_name: "Marquinhos",
  //       num: 4,
  //       img: marquinhos,
  //       pos: "D",
  //     },
  //     {
  //       name: "G. Martinelli",
  //       short_name: "Martinelli",
  //       num: 91,
  //       img: martinelli,
  //       pos: "A",
  //     },
  //     {
  //       name: "Militao",
  //       num: 14,
  //       img: militao,
  //       pos: "D",
  //     },
  //     {
  //       name: "Rodrygo",
  //       short_name: "Rodrygo",
  //       apelido: "Raio",
  //       num: 89,
  //       img: rodrygo,
  //       pos: "P",
  //     },
  //     {
  //       name: "Pedro",
  //       apelido: "Queixada",
  //       short_name: "Pedro",
  //       num: 93,
  //       img: pedro,
  //       pos: "A",
  //     },
  //     {
  //       name: "Weverton",
  //       num: 12,
  //       img: weverton,
  //       pos: "G",
  //     },
  //     {
  //       name: "G. Jesus",
  //       short_name: "G. Jesus",
  //       num: 9,
  //       img: gabrieljesus,
  //       pos: "A",
  //     },
  //     {
  //       name: "Thiago Silva",
  //       short_name: "T. Silva",
  //       num: 3,
  //       img: thiagosilva,
  //       pos: "D",
  //     },
  //     {
  //       name: "G. Barbosa",
  //       apelido: "Gabigol",
  //       short_name: "G. Barbosa",
  //       num: 69,
  //       img: gabigol,
  //       pos: "A",
  //     },
  //   ],
};
// const sortedPlayers = players.sort((a, b) => a.num - b.num);

export { squads, clubs };
