@extends('layouts.website')

@section('content')

    <bradcam title="Zaboravljena lozinka"></bradcam>

    <div class="container my-5">
        <div class="row justify-content-center">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

            <form method="POST" class="form-contact contact_form w-100 py-5" action="{{ route('password.email') }}">
                @csrf
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label text-md-right mt-2">Email adresa *</label>
                    <div class="col-md-5">
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" />
                        @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>

                <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="genric-btn info circle mt-5">Pošalji zahtjev na email</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

@endsection
