<div class="row">
    <div class="container bg-warning">
        @if (Request::is("/"))
            <h2>Es un Test!</h2>
        @else
            Hola Lola!
        @endif
    </div>
</div>
