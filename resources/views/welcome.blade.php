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
    <section class="section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="section-title mb-5">Featured venues in London</h1>
                </div>
                @foreach (range(1, 4) as $i)
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <salon-card></salon-card>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

@endsection


