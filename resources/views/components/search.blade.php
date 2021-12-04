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
        <div class="input-group mt-3 shadow">
            <input type="submit" value="Pesquisar" class="btn btn-outline-secondary" type="button" id="button-addon1">
            <input type="text" class="form-control bg-primary border border-secondary text-secondary" placeholder="Insere o nome do pesquisador(a)..." name="query">
          </div>
        {{-- <input type="text" name="query" class="form-control" />
        <input type="submit" class="btn btn-sm btn-secondary" value="Search" style="margin-top: 10px;" /> --}}
    </form>
</div>
