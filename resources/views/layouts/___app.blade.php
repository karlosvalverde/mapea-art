<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

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
                <div class="col-6 mr-5">
                    <x-header/>
                    <x-search :researchers="$researchers"/>
                </div>
                <div class="col-6 h-100 no-gutters">
                    <div class="container bg-secondary shadow h-100 overflow-auto p-5">
                        <x-researchers :researchers="$researchers"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
