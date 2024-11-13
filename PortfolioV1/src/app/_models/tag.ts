export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkslategrey');
    static readonly PYTHON = new Tag('Python', 'limegreen');
    static readonly CSHARP = new Tag('C#', 'deeppink');
    static readonly NODEJS = new Tag('Node.JS', 'teal');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'coral');
    static readonly REACT = new Tag('React', 'blue');
    static readonly MONGODB = new Tag('MongoDB', 'orange');
    static readonly SQLITE = new Tag('SQLite3', 'darkviolet');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'brown');
    static readonly DJANGO = new Tag('Django', 'darkolivegreen');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}