@extends('layouts.app')

@foreach ($researchers as $researcher)
<div class="">
    <a href="{{ URL::to('researchers/' . $researcher->id) }}">
        {{ $researcher->name }}
    </a>
</div>
@endforeach

