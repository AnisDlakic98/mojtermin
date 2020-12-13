@extends('layouts.website')

@section('content')

    <bradcam title="Prijavi se"></bradcam>

    <section class="section section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">

                    <form method="POST" class="form-contact contact_form" action="{{ route('login') }}">

                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email adresa *</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}">
                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Lozinka *</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password">
                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="d-flex">
                                    <div class="confirm-checkbox">
                                        <input type="checkbox" id="confirm-checkbox" name="remember">
                                        <label for="confirm-checkbox"></label>
                                    </div>

                                    <label class="form-check-label ml-2" for="remember">
                                        {{ __('Zapamti me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="genric-btn info circle">
                                    {{ __('Prijavi se') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Zaboravljena lozinka?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
