<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <title>mapea.art</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div class="container-fluid bg-primary vh-100 overflow-hidden">
        <div class="row h-100">
            <div class="row p-5 h-100">
                <div class="col-6">
                    <x-header/>
                    <div class="row">
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
                                {{-- @foreach ($researchers as $researcher)
                                    <option value="{{ $researcher->state }}">{{ $researcher->state }}</option>
                                @endforeach --}}
                            </select>

                            {{-- Filter by University --}}
                            <select class="form-select bg-primary border border-secondary text-secondary mb-3 shadow" aria-label="Filter by University">
                                <option selected>Seleccione uma universidade...</option>
                                {{-- @foreach ($researchers as $researcher)
                                    <option value="{{ $researcher->university }}">{{ $researcher->university }}</option>
                                @endforeach --}}
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

                </div>
                <div class="col-6 h-100 no-gutters">
                    <div class="container bg-secondary shadow h-100 overflow-auto p-5">
                        <div class="row mb-3 bg-secondary w-100 sticky-top">
                            <a href="{{ URL::to('/') }}">&larr; Voltar</a>
                        </div>
                        <div class="row">
                            <div class="text-break">
                                <p><span class="fw-bold">Nome:</span><br/>
                                    {{$researcher->name}}
                                </p>
                                <p><span class="fw-bold">Estado:</span><br/>
                                    {{$researcher->state}}
                                </p>
                                <p><span class="fw-bold">Contacto:</span><br/>
                                    {{$researcher->contact}}
                                </p>
                                <p><span class="fw-bold">Web:</span><br/>
                                    <a href="{{$researcher->web}}" target="_blank">{{$researcher->web}}</a>
                                </p>
                                <p><span class="fw-bold">Universidade:</span><br/>
                                    {{$researcher->university}}
                                </p>
                                <p><span class="fw-bold">Rol:</span><br/>
                                    {{$researcher->role}}
                                </p>
                                <p><span class="fw-bold">Campo:</span><br/>
                                    {{$researcher->research_field}}
                                </p>
                                <p><span class="fw-bold">Palavras chave:</span><br/>
                                    {{$researcher->keywords}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
