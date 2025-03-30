<template>
    <div>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card-body">
                            <h3 class="card-title">
                                <strong style="color: #0059FF;">99Frio</strong> 
                                Conectando Fabricantes, Instaladores e Clientes
                                <strong style="color: #0059FF;">ar condicionado!</strong>
                            </h3>
                            <p style="margin-top: 30px;">
                                Objetivo: Criar um ecossistema onde fabricantes, instaladores e clientes possam fechar negócios de forma rápida e confiável.
                            </p>
                            <p> Uma plataforma que facilita a conexão entre usuários e profissionais especializados na instalação de ar condicionado em sua região. </p>
                            <div class="d-grid gap-2">
                                <a href="https://99frio.srv757991.hstgr.cloud/cadastro" class="btn btn-gradient">Eu quero um plano de marketing</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card-body">
                            <div class="video-container">
                                <iframe 
                                    src="https://www.youtube.com/embed/OAZ-DJm2Qpw?si=H_Oe4e6qxjTMaLCu" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.banner {
    margin-top: 80px;
}

/* Responsividade do vídeo */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Proporção 16:9 */
    height: 0;
   
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.card-custom {
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    min-height: 300px; /* Garantir uma altura mínima consistente */
}

.card-custom:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-header-custom {
    background: linear-gradient(45deg, #d4af37, #c68e17); /* Dourado para o Plano Basic */
    color: white;
    text-align: center;
    padding: 15px;
    font-weight: bold;
}

.btn-gradient {
    background: linear-gradient(45deg, #007bff, #6610f2); /* Gradiente no botão */
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 50px;
    transition: 0.3s;
}

.btn-gradient:hover {
    background: linear-gradient(45deg, #0056b3, #520dc2);
    transform: scale(1.05);
    color: white;
}

/* Novo estilo para o botão do Plano Basic (dourado) */
.btn-basic {
    background: linear-gradient(45deg, #d4af37, #c68e17);
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 50px;
    transition: 0.3s;
}

.btn-basic:hover {
    background: linear-gradient(45deg, #b5893f, #9c7c28);
    transform: scale(1.05);
}
</style>