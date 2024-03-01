<template>
    <!-- auth-page wrapper -->
    <div class="auth-page-wrapper overflow-hidden d-flex  justify-content-center align-items-center min-vh-100">
        <!-- auth-page content -->
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card overflow-hidden">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div
                                            class="position-relative h-100 d-flex flex-column align-items-center justify-content-center">
                                            <div class="mb-4">
                                                <a href="javascript:void(0)" class="d-block">
                                                    <span class="text-white fs-22 fw-bold">mosala
                                                        <small><sub class="fw-normal">.admin</sub></small></span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- end col -->

                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4">
                                        <div>
                                            <h5 class="text-primary">Bienvenu !</h5>
                                            <p class="text-muted">Veuillez vous authentifier pour continuer !</p>
                                        </div>

                                        <div class="mt-4">
                                            <form @submit.prevent="login">
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Identifiant</label>
                                                    <input type="text" class="form-control" id="username" v-model="form.id"
                                                        placeholder="Entrez votre identifiant..." required>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="float-end">
                                                        <a href="javascript:void(0)" class="text-muted">Mot de passe oublié
                                                            ?</a>
                                                    </div>
                                                    <label class="form-label" for="password-input">Mot de passe</label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input :type="pwdType" class="form-control pe-5 password-input"
                                                            v-model="form.pwd" placeholder="Entrez le mot de passe..."
                                                            id="password-input" required>
                                                        <button @mouseenter="pwdType = 'text'"
                                                            @mouseleave="pwdType = 'password'"
                                                            class="btn btn-link  position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button" id="password-addon"><i class=" align-middle"
                                                                :class="pwdType === 'password' ? 'ri-eye-fill' : 'ri-eye-off-fill'"></i></button>
                                                    </div>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="auth-remember-check">
                                                    <label class="form-check-label" for="auth-remember-check">Garder ma
                                                        session</label>
                                                </div>

                                                <div class="mt-4">
                                                    <button class="btn btn-success w-100" type="submit">Connecter</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- end col -->
                            </div>
                            <!-- end row -->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col -->

                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth page content -->
    </div>
    <!-- end auth-page-wrapper -->
</template>

<script>
export default {
    name: "LoginScreen",
    data() {
        return {
            isLoading: false,
            pwdType: "password",
            form: {
                id: '',
                pwd: ''
            }
        }
    },

    methods: {
        login(e) {
            if (this.form.id === "admin@mosala.site" && this.form.pwd === "milleniumhorizon@2023") {
                this.$router.push({ name: 'home-secure-route' })
            }
            else {
                alert("Identifiant ou mot de passe erroné !");
                return;
            }
        }
    },
}
</script>
