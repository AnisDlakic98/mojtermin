@extends('layouts.website')

@section('content')

    <banner></banner>

    <a class="nav-link" href="{{ route('logout') }}"
       onclick="event.preventDefault();document.getElementById('logout-form').submit();">
        <i class="nav-icon fas fa-power-off" style="color:red;"></i>
        <p> {{ __('Logout') }}</p>
    </a>
    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>


    @include('components.featured-collection')

@endsection


