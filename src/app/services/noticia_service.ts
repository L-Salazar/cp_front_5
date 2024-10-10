import { Noticia } from '../models/noticia';

export const noticiasData: Noticia[] = [
    {
        id: 1,
        titulo: "Primeira Notícia",
        data: "2024-10-09",
        conteudo: "Este é o conteúdo da primeira notícia do portal.",
        imagem: "/public/images/noticia1.jpg",
        categorias: ["Tecnologia", "Negócios"],
        comentarios: [
            { nome: "João", texto: "Ótima notícia!" },
            { nome: "Maria", texto: "Muito informativo." }
        ]
    },
    {
        id: 2,
        titulo: "Segunda Notícia",
        data: "2024-10-08",
        conteudo: "Este é o conteúdo da segunda notícia.",
        imagem: "/public/images/noticia2.jpg",
        categorias: ["Esportes"],
        comentarios: []
    }
];
