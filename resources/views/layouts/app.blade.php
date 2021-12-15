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
                <div class="col col-6 mr-5">
                    <x-header/>
                    <x-search :researchers="$researchers"/>
                    <!-- React root DOM -->
                    <div id="example"></div>
                </div>
                <div class="col col-6 h-100 no-gutters">
                    <div class="container bg-dark shadow h-100 overflow-auto p-5">
                        {{-- @if ($isDetail === true) --}}
                            {{-- <x-detail :researcher="$researcher"/> --}}
                        {{-- @else --}}
                            <x-researchers :researchers="$researchers"/>
                        {{-- @endif --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
