<form action="{{ route('test') }}" method="GET">
    <input type="text" name="name" placeholder="Insere o nome..." /><br/>
    <input type="text" name="research_keywords" placeholder="Insere uma palavra chave..." /><br/>
    <select name="state">
        <option value="">Seleccione um estado brasileiro...</option>
        <option value="Acre (AC)">Acre (AC)</option>
        <option value="Alagoas (AL)">Alagoas (AL)</option>
        <option value="Amapá (AP)">Amapá (AP)</option>
        <option value="Amazonas (AM)">Amazonas (AM)</option>
        <option value="Bahia (BA)">Bahia (BA)</option>
        <option value="Ceará (CE)">Ceará (CE)</option>
        <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
        <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
        <option value="Goiás (GO)">Goiás (GO)</option>
        <option value="Maranhão (MA)">Maranhão (MA)</option>
        <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
        <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
        <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
        <option value="Pará (PA)">Pará (PA)</option>
        <option value="Paraíba (PB)">Paraíba (PB)</option>
        <option value="Paraná (PR)">Paraná (PR)</option>
        <option value="Pernambuco (PE)">Pernambuco (PE)</option>
        <option value="Piauí (PI)">Piauí (PI)</option>
        <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
        <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
        <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
        <option value="Rondônia (RO)">Rondônia (RO)</option>
        <option value="Roraima (RR)">Roraima (RR)</option>
        <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
        <option value="São Paulo (SP)">São Paulo (SP)</option>
        <option value="Sergipe (SE)">Sergipe (SE)</option>
        <option value="Tocantins (TO)">Tocantins (TO)</option>
    </select><br/>
    <select name="university">
        <option value="">Seleccione uma universidade...</option>
        <option value="Instituto Federal de Santa Catarina">Instituto Federal de Santa Catarina</option>
        <option value="Universidade de São Paulo">Universidade de São Paulo</option>
        <option value="Universidade do Estado de Santa Catarina">Universidade do Estado de Santa Catarina</option>
        <option value="Universidade Federal do Ceará">Universidade Federal do Ceará</option>
        <option value="Universidade Federal do Espirito Santo">Universidade Federal do Espirito Santo</option>
        <option value="Universidade Federal de Goiás">Universidade Federal de Goiás</option>
        <option value="Universidade Federal de Minas Gerais">Universidade Federal de Minas Gerais</option>
        <option value="Universidade Federal do Pará">Universidade Federal do Pará</option>
        <option value="Universidade Federal do Rio de Janeiro">Universidade Federal do Rio de Janeiro</option>
        <option value="Universidade Federal do Rio Grande do Sul">Universidade Federal do Rio Grande do Sul</option>
        <option value="Universidade Federal de São Carlos">Universidade Federal de São Carlos</option>
        <option value="Universidade Federal do Tocantins">Universidade Federal do Tocantins</option>
        <option value="Universidade Federal de Uberlândia">Universidade Federal de Uberlândia</option>
        <option value="Universidade Federal de Viçosa">Universidade Federal de Viçosa</option>
        <option value="Universidade Federal Fluminense">Universidade Federal Fluminense</option>
        <option value="Universidade Paulista">Universidade Paulista</option>

    </select><br/>
    <input type="text" name="university" placeholder="Insere uma universidade..." /><br/>
    <select name="role">
        <option value="">Seleccione um vinculo institucional...</option>
        <option value="Mestrando(a)">Mestrando(a)</option>
        <option value="Doutorando(a)">Doutorando(a)</option>
        <option value="Pós-doutorando(a)">Pós-doutorando(a)</option>
        <option value="Docente">Docente</option>
        <option value="Pesquisador(a)">Pesquisador(a)</option>
    </select><br/>
    <select name="research_field">
        <option value="">Seleccione uma área de atuação...</option>
        <option value="Mestrando(a)">Arte-educação</option>
        <option value="Artes Visuais">Artes Visuais (Arte Digital, Escultura, Fotografia, História em quadrinhos, Pintura, etc.)</option>
        <option value="Artes Cênicas">Artes Cênicas (Circo, Dança e Teatro)</option>
        <option value="Audiovisual">Audiovisual</option>
        <option value="Música">Música</option>
    </select><br/>
    <button type="submit">Pesquisar</button>
</form>

@if($researchers->isNotEmpty())
{{-- <div class="bg-secondary w-100 sticky-top d-flex justify-content-center align-self-center p-2">
    {{ $researchers->links("pagination::bootstrap-4") }}
</div> --}}
@php($count=0)

<hr/>
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
        @php($count++)
    @endforeach
    <p>{{$count}} artistas encontrados</p>
@else
    <div>
        <h2>No researchers found</h2>
    </div>
@endif
