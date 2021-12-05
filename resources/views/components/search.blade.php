<div class="row">
    {{-- <div class="container bg-warning">
        @if (Request::is("/"))
            <h2>Es un Test!</h2>
        @else
            Hola Lola!
        @endif
    </div> --}}
    <form action="{{ route('search') }}" method="GET">
        @csrf
        {{-- Search by Name --}}
        <div class="input-group my-3 shadow">
            <input type="text" class="form-control bg-primary border border-secondary text-secondary" placeholder="Insere o nome do pesquisador(a)..." name="query">
        </div>

        {{-- Search by Keywords --}}
        <div class="input-group my-3 shadow">
            <input type="text" class="form-control bg-primary border border-secondary text-secondary" placeholder="Insere uma palavra chave..." name="query">
        </div>

        {{-- Filter by State --}}
        <select class="form-select bg-primary border border-secondary text-secondary mb-3 shadow" aria-label="Filter by State">
            <option selected>Seleccione um estado...</option>
            @foreach ($researchers as $researcher)
                <option value="{{ $researcher->state }}">{{ $researcher->state }}</option>
            @endforeach
        </select>

        {{-- Filter by University --}}
        <select class="form-select bg-primary border border-secondary text-secondary mb-3 shadow" aria-label="Filter by University">
            <option selected>Seleccione uma universidade...</option>
            @foreach ($researchers as $researcher)
                <option value="{{ $researcher->university }}">{{ $researcher->university }}</option>
            @endforeach
        </select>

        {{-- Filter by Role --}}
        <select class="form-select bg-primary border border-secondary text-secondary mb-3 shadow" aria-label="Filter by Role">
            <option selected>Seleccione o rol...</option>
                <option value="Mestrando(a)">Mestrando(a)</option>
                <option value="Doutorando(a)">Doutorando(a)</option>
                <option value="Pós-doutorando(a)">Pós-doutorando(a)</option>
                <option value="Docente">Docente</option>
                <option value="Pesquisador(a)">Pesquisador(a)</option>
        </select>

        {{-- Filter by Research Field --}}
        <select class="form-select bg-primary border border-secondary text-secondary mb-3 shadow" aria-label="Filter by Research Field">
            <option selected>Seleccione o campo de pesquisa...</option>
            <option value="Artes Visuais">Artes Visuais</option>
            <option value="Artes Cênicas">Artes Cênicas</option>
            <option value="Música">Música</option>
            <option value="Arte-educação">Arte-educação</option>
            <option value="Audiovisual">Audiovisual</option>
        </select>

        <button type="submit" class="btn btn-secondary w-100">Pesquisar</button>

    </form>
</div>
