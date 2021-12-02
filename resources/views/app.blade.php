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
                <div class="col-6 h-100 no-gutters">
                    <div class="container bg-secondary shadow h-100 overflow-auto p-5">
                        <div class="bg-secondary w-100 sticky-top d-flex justify-content-center align-self-center p-2">
                            {{ $researchers->links("pagination::bootstrap-4") }}
                        </div>
                        <div class="row h-100 mb-5">
                            {{-- Researchers --}}
                            <div class="col-6">
                                @foreach ($researchers as $researcher)
                                <div class="">
                                    <a href="{{ URL::to('researchers/' . $researcher->id) }}">
                                        {{ $researcher->name }}
                                    </a>
                                </div>
                                @endforeach
                            </div>
                            {{-- Search --}}
                            <div class="col-6">
                                @section('search')
                                Is a test
                                @show

                                {{-- @yield('search') --}}
                            </div>
                        </div>
                    </div>
                    {{-- <div id="root"></div> --}}
                </div>
            </div>
        </div>
    </div>
</body>
</html>
