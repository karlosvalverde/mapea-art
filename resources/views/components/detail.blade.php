@php($isDetail = true)
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
