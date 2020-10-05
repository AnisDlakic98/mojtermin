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
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Kao korisnik</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Registruj moj salon</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <form method="POST" action="{{ route('register') }}">
                                @csrf

                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}">

                                        @error('name')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

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
                                    <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

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
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation">
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Register') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div>
                                            <input type="text" name="salon_name" placeholder="Naziv Salona"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Naziv Salona'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group-icon">
                                            <div class="icon"><i class="fa fa-plane" aria-hidden="true"></i></div>
                                            <div class="form-select" id="default-select">
                                                <select name="category">
                                                    <option value="1">Kategorija salona</option>
                                                    <option value="1">Dhaka</option>
                                                    <option value="1">Dilli</option>
                                                    <option value="1">Newyork</option>
                                                    <option value="1">Islamabad</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div class="input-group-icon">
                                            <div class="icon"><i class="fa fa-plane" aria-hidden="true"></i></div>
                                            <div class="form-select" id="default-select">
                                                <select name="country">
                                                    <option value="1">Država</option>
                                                    <option value="1">Dhaka</option>
                                                    <option value="1">Dilli</option>
                                                    <option value="1">Newyork</option>
                                                    <option value="1">Islamabad</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div class="input-group-icon">
                                            <div class="icon"><i class="fa fa-plane" aria-hidden="true"></i></div>
                                            <div class="form-select" id="default-select">
                                                <select name="city">
                                                    <option value="1">Grad</option>
                                                    <option value="1">Dhaka</option>
                                                    <option value="1">Dilli</option>
                                                    <option value="1">Newyork</option>
                                                    <option value="1">Islamabad</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div>
                                            <input type="text" name="salon_address" placeholder="Adresa Salona"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Adresa Salona'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div>
                                            <input type="text" name="email" placeholder="Email Adresa"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Adresa'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div>
                                            <input type="text" name="phone" placeholder="Broj telefona"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Broj telefona'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div>
                                            <input type="text" name="website" placeholder="Websajt"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Websajt'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div>
                                            <input type="password" name="password" placeholder="Lozinka"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Lozinka'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                        <div>
                                            <input type="password" name="password_confirm" placeholder="Ponovi Lozinku"
                                                   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ponovi Lozinku'"
                                                   class="single-input"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- registration_end -->

@endsection
