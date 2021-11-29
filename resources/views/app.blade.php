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
                    <h1>Mapeamento de pesquisadores em arte no contexto brasilero</h1>
                </div>
                <div class="col-6 h-100 overflow-auto">
                    <div class="container bg-secondary shadow p-3">
                        <div class="sticky-top d-flex justify-content-center align-self-center p-2">
                            {{ $researchers->links("pagination::bootstrap-4") }}
                        </div>
                        <div class="row">
                            @foreach ($researchers as $researcher)
                            <div class="p-2">
                                {{ $researcher->name }}
                                {{-- <th>{{$researcher->state}}</th>
                                <th>{{$researcher->contact}}</th>
                                <th>{{$researcher->web}}</th>
                                <th>{{$researcher->university}}</th>
                                <th>{{$researcher->role}}</th>
                                <th>{{$researcher->research_field}}</th>
                                <th>{{$researcher->keywords}}</th> --}}
                            </div>
                            @endforeach
                        </div>
                    </div>
                    {{-- <div id="root"></div> --}}
                </div>
            </div>
        </div>
    </div>
</body>
</html>
