import { Book } from "./book.model";

export class BookService {
    private book: Book [] = [
        // 1
        {
            id: 1,
            name: 'Book 1',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-blue.png',
            genre: 'Genre 1',
            pageNumber: 100,
            author: 'Author 1',
            publishDate: new Date("Jan 8, 2005"),
            price: 1000,
            rating: 4.0
        },
        // 2
        {
            id: 2,
            name: 'Book 2',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-green.png',
            genre: 'Genre 2',
            pageNumber: 200,
            author: 'Author 2',
            publishDate: new Date("Mar 22, 1997"),
            price: 1200,
            rating: 3.6
        },
        // 3
        {
            id: 3,
            name: 'Book 3',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-light-green.png',
            genre: 'Genre 1',
            pageNumber: 300,
            author: 'Author 3',
            publishDate: new Date("Mar 22, 1997"),
            price: 2000,
            rating: 3.4
        },
        // 4
        {
            id: 4,
            name: 'Book 4',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-purple.png',
            genre: 'Genre 3',
            pageNumber: 230,
            author: 'Author 1',
            publishDate: new Date("Sep 15, 1982"),
            price: 1500,
            rating: 4.0
        },
        // 5
        {
            id: 5,
            name: 'Book 5',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            genre: 'Genre 2',
            image: '../assets/images/books/book-red.png',
            pageNumber: 400,
            author: 'Author 4',
            publishDate: new Date("Oct 1, 1976"),
            price: 1100,
            rating: 3.0
        },
        // 6
        {
            id: 6,
            name: 'Book 6',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-white.png',
            genre: 'Genre 4',
            pageNumber: 310,
            author: 'Author 4',
            publishDate: new Date("Apr 30, 2010"),
            price: 2200,
            rating: 4.5
        },
        // 7
        {
            id: 7,
            name: 'Book 7',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-yellow.png',
            genre: 'Genre 3',
            pageNumber: 150,
            author: 'Author 3',
            publishDate: new Date("Dec 25, 2002"),
            price: 1200,
            rating: 2.5
        },
        // 8
        {
            id: 8,
            name: 'Book 8',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-blue.png',
            genre: 'Genre 4',
            pageNumber: 300,
            author: 'Author 5',
            publishDate: new Date("Jul 17, 1971"),
            price: 2100,
            rating: 4.0
        },
        // 9
        {
            id: 9,
            name: 'Book 9',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-light-green.png',
            genre: 'Genre 2',
            pageNumber: 290,
            author: 'Author 4',
            publishDate: new Date("Feb 4, 2007"),
            price: 1500,
            rating: 2.0
        },
        // 10
        {
            id: 10,
            name: 'Book 10',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-red.png',
            genre: 'Genre 5',
            pageNumber: 400,
            author: 'Author 1',
            publishDate: new Date("Aug 9, 1995"),
            price: 2500,
            rating: 5.0
        },
        // 11
        {
            id: 11,
            name: 'Book 11',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-yellow.png',
            genre: 'Genre 1',
            pageNumber: 100,
            author: 'Author 1',
            publishDate: new Date("Jun 19, 2018"),
            price: 1000,
            rating: 4.0
        },
        // 12
        {
            id: 12,
            name: 'Book 12',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-green.png',
            genre: 'Genre 2',
            pageNumber: 200,
            author: 'Author 2',
            publishDate: new Date("May 3, 1992"),
            price: 1200,
            rating: 3.6
        },
        // 13
        {
            id: 13,
            name: 'Book 13',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-purple.png',
            genre: 'Genre 1',
            pageNumber: 300,
            author: 'Author 3',
            publishDate: new Date("Aug 1, 1987"),
            price: 2000,
            rating: 3.4
        },
        // 14
        {
            id: 14,
            name: 'Book 14',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-white.png',
            genre: 'Genre 3',
            pageNumber: 230,
            author: 'Author 1',
            publishDate: new Date("Jan 27, 1943"),
            price: 1500,
            rating: 4.0
        },
        // 15
        {
            id: 15,
            name: 'Book 15',
            genre: 'Genre 2',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-yellow.png',
            pageNumber: 400,
            author: 'Author 4',
            publishDate: new Date("Sep 14, 1978"),
            price: 1100,
            rating: 3.0
        },
        // 16
        {
            id: 16,
            name: 'Book 16',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-white.png',
            genre: 'Genre 4',
            pageNumber: 310,
            author: 'Author 4',
            publishDate: new Date("Jul 5, 2000"),
            price: 2200,
            rating: 4.5
        },
        // 17
        {
            id: 17,
            name: 'Book 17',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-red.png',
            genre: 'Genre 3',
            pageNumber: 150,
            author: 'Author 3',
            publishDate: new Date("Nov 20, 1965"),
            price: 1200,
            rating: 2.5
        },
        // 18
        {
            id: 18,
            name: 'Book 18',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-purple.png',
            genre: 'Genre 4',
            pageNumber: 300,
            author: 'Author 5',
            publishDate: new Date("Dec 16, 1973"),
            price: 2100,
            rating: 4.0
        },
        // 19
        {
            id: 19,
            name: 'Book 19',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-light-green.png',
            genre: 'Genre 2',
            pageNumber: 290,
            author: 'Author 4',
            publishDate: new Date("Jun 22, 1989"),
            price: 1500,
            rating: 2.0
        },
        // 20
        {
            id: 20,
            name: 'Book 20',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-green.png',
            genre: 'Genre 5',
            pageNumber: 400,
            author: 'Author 1',
            publishDate: new Date("Apr 10, 1937"),
            price: 2500,
            rating: 5.0
        },
        // 21
        {
            id: 21,
            name: 'Book 21',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-blue.png',
            genre: 'Genre 1',
            pageNumber: 100,
            author: 'Author 1',
            publishDate: new Date("Mar 13, 1999"),
            price: 1000,
            rating: 4.0
        },
        // 22
        {
            id: 22,
            name: 'Book 22',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-purple.png',
            genre: 'Genre 2',
            pageNumber: 200,
            author: 'Author 2',
            publishDate: new Date("May 12, 1912"),
            price: 1200,
            rating: 3.6
        },
        // 23
        {
            id: 23,
            name: 'Book 23',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-yellow.png',
            genre: 'Genre 1',
            pageNumber: 300,
            author: 'Author 3',
            publishDate: new Date("Feb 23, 1979"),
            price: 2000,
            rating: 3.4
        },
        // 24
        {
            id: 24,
            name: 'Book 24',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-light-green.png',
            genre: 'Genre 3',
            pageNumber: 230,
            author: 'Author 1',
            publishDate: new Date("Oct 29, 2001"),
            price: 1500,
            rating: 4.0
        },
        // 25
        {
            id: 25,
            name: 'Book 25',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            genre: 'Genre 2',
            image: '../assets/images/books/book-red.png',
            pageNumber: 400,
            author: 'Author 4',
            publishDate: new Date("Sep 3, 1986"),
            price: 1100,
            rating: 3.0
        },
        // 26
        {
            id: 26,
            name: 'Book 26',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-white.png',
            genre: 'Genre 4',
            pageNumber: 310,
            author: 'Author 4',
            publishDate: new Date("Jul 6, 1928"),
            price: 2200,
            rating: 4.5
        },
        // 27
        {
            id: 27,
            name: 'Book 27',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-green.png',
            genre: 'Genre 3',
            pageNumber: 150,
            author: 'Author 3',
            publishDate: new Date("Dec 7, 1949"),
            price: 1200,
            rating: 2.5
        },
        // 28
        {
            id: 28,
            name: 'Book 28',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-purple.png',
            genre: 'Genre 4',
            pageNumber: 300,
            author: 'Author 5',
            publishDate: new Date("Mar 9, 1933"),
            price: 2100,
            rating: 4.0
        },
        // 29
        {
            id: 29,
            name: 'Book 29',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-blue.png',
            genre: 'Genre 2',
            pageNumber: 290,
            author: 'Author 4',
            publishDate: new Date("Nov 8, 2004"),
            price: 1500,
            rating: 2.0
        },
        // 30
        {
            id: 30,
            name: 'Book 30',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra ante a massa luctus congue. Nulla lacinia mi facilisis vulputate pellentesque. Aenean est ante, sodales at est a, ullamcorper sagittis odio. Ut volutpat eros ut commodo maximus. Mauris dolor diam, posuere in placerat et, porta ut ligula. Proin varius facilisis augue, id vehicula risus gravida id. Donec convallis libero enim. Nulla ut libero eget ligula lacinia rhoncus. Maecenas sit amet elit ullamcorper, fermentum arcu sodales, porta justo. Proin suscipit quam et blandit rutrum. Phasellus sed porta sem. Aenean aliquam metus a lacinia mollis.\n\nNullam egestas, felis ut rhoncus commodo, est purus gravida enim, ac pharetra massa justo eu eros. Praesent ac vestibulum justo, non molestie turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a pulvinar justo. Aliquam eget iaculis erat. Aenean cursus fermentum nisl, id tincidunt enim vestibulum at. Etiam molestie lectus eu lectus euismod elementum. Sed eu massa facilisis, tempor purus eu, tempus dui. Etiam velit est, hendrerit a sodales at, dignissim quis risus. Aenean vel gravida sapien. Sed euismod felis vel odio blandit egestas.\n\nDonec lobortis aliquam consectetur. Nullam quis nulla sem. Morbi laoreet ligula eu massa blandit, ac pretium turpis condimentum. Aliquam non neque nisi. Nunc lacinia, odio ut mollis ullamcorper, nisl felis mollis felis, et facilisis lacus massa vel arcu.",
            image: '../assets/images/books/book-yellow.png',
            genre: 'Genre 5',
            pageNumber: 400,
            author: 'Author 1',
            publishDate: new Date("Oct 4, 1969"),
            price: 2500,
            rating: 5.0
        }
    ]

    getBooks() {
        return this.book;
    }

    getBookById(id: number) {
        return this.book.find(book => book.id === id);
    }
    
}