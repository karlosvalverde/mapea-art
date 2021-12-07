<form action="{{ route('test') }}" method="GET">
    <input type="text" name="name" placeholder="Insere o nome..." /><br/>
    <input type="text" name="state" placeholder="Insere o estado..." /><br/>
    <input type="text" name="university" placeholder="Insere uma universidade..." /><br/>
    <input type="text" name="role" placeholder="Insere o role..." /><br/>
    <input type="text" name="research_field" placeholder="Insere o campo de pesquisa..." /><br/>
    <input type="text" name="research_keywords" placeholder="Insere uma palavra chave..." /><br/>
    <button type="submit">Pesquisar</button>
</form>

@if($researchers->isNotEmpty())
{{-- <div class="bg-secondary w-100 sticky-top d-flex justify-content-center align-self-center p-2">
    {{ $researchers->links("pagination::bootstrap-4") }}
</div> --}}
    @foreach ($researchers as $researcher)
        <div class="researcher-list">
            <p>{{ $researcher->id }} - {{ $researcher->name }}</p>
            <p>Estado: - {{ $researcher->state }}</p>
            <p>Universidade: - {{ $researcher->university }}</p>
            <p>Role: - {{ $researcher->role }}</p>
            <p>Campo de pesquisa: - {{ $researcher->research_field }}</p>
            <p>Palavras Chave: - {{ $researcher->keywords }}</p>
            <hr/>
        </div>
    @endforeach

@else
    <div>
        <h2>No researchers found</h2>
    </div>
@endif
