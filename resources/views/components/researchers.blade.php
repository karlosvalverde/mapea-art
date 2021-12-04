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
    {{-- Detail --}}
    {{-- <div class="col-6">
        <x-detail :researcher="$researcher"/>
    </div> --}}
</div>
