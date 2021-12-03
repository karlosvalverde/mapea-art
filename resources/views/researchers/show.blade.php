{{-- <!doctype html>
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
                    <h1>Mapeamento de pesquisadores em arte no contexto brasilero</h1>
                </div>
                <div class="col-6 h-100 no-gutters">
                    <div class="container bg-secondary shadow h-100 overflow-auto p-5">
                        <div class="row mb-3 bg-secondary w-100 sticky-top">
                            <a href="{{ URL::to('researchers') }}">&larr; Voltar</a>
                        </div>
                        <div class="row"> --}}
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
                        {{-- </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html> --}}
