@extends('layouts.website')

@section('content')

    <bradcam title="Registracija"></bradcam>

    <!-- registration_start -->
    <section class="section section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 m-auto">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                               role="tab" aria-controls="pills-home" aria-selected="true">Kao korisnik</a>
                        </li>
                        <li class="nav-item">
                            <a href="/register-owner" class="nav-link" aria-selected="false">Registruj moj salon</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                             aria-labelledby="pills-home-tab">
                            <form class="form-contact contact_form" action="{{ route('register') }}" method="POST" id="contactForm">
                                @csrf
                                <input type="hidden" id="registerType" name="registerType" value="customer" />
                                <h2 class="contact-title">Korisnički detalji</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Ime i prezime"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ime i prezime'"
                                                   value="{{ old('name') }}"
                                                   name="name"
                                                   id="name"
                                                   class="form-control @error('name') is-invalid @enderror"

                                            >
                                            @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Email adresa"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email adresa'"
                                                   value="{{ old('email') }}"
                                                   name="email"
                                                   id="email"
                                                   class="form-control @error('email') is-invalid @enderror"
                                            >
                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="password"
                                                   placeholder="Unesite lozinku"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Unesite lozinku'"
                                                   value="{{ old('password') }}"
                                                   name="password"
                                                   id="password"
                                                   class="form-control @error('password') is-invalid @enderror"
                                            >
                                            @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="password"
                                                   placeholder="Ponovi lozinku"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ponovi lozinku'"
                                                   value="{{ old('password_confirmation') }}"
                                                   name="password_confirmation"
                                                   id="password_confirmation"
                                                   class="form-control @error('password-confirm') is-invalid @enderror"
                                            >
                                            @error('password_confirmation')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <button type="submit" class="button button-contactForm boxed-btn">Registruj se</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- registration_end -->

@endsection
