@if($researchers->isNotEmpty())
    @php($count=0)

    <div class="row h-100 mb-5">
        {{-- Researchers --}}
        <div class="col-6">
            @foreach ($researchers as $researcher)
            <div class="">
                <a href="{{ URL::to('researchers/' . $researcher->id) }}">
                    {{ $researcher->name }}
                </a>
            </div>
            @php($count++)
            @endforeach
            <hr class="text-secondary"/>
            <h2 class="text-secondary pb-3">{{ $count }} pesquisadores encontrados.</h2>
        </div>
    {{-- Detail --}}
    {{-- <div class="col-6">
        <x-detail :researcher="$researcher"/>
    </div> --}}
    </div>
@else
    <div>
        <h2>No researchers found</h2>
    </div>
@endif


