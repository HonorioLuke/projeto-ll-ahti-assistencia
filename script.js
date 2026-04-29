/* ========================================
   JAVASCRIPT DO SITE AH.TI
   ======================================== */

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MENU MOBILE
    // ========================================
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Abre/fecha menu mobile ao clicar no botão
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Fecha menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Fecha menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
    
    // ========================================
    // HEADER COM SCROLL
    // ========================================
    
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        }
    });
    
    // ========================================
    // SCROLL SUAVE PARA ÂNCORAS
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ANIMAÇÃO AO ROLAR (FADE IN)
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos a serem animados
    const animatedElements = document.querySelectorAll(
        '.servico-card, .diferencial-item, .tecnico-card, .contato-card, .sobre-content'
    );
    
    // Configura estado inicial e observa elementos
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ========================================
    // MOSTRA LOGO SE EXISTIR
    // ========================================
    
    // Tenta carregar a logo e mostra se existir
    const logoImages = document.querySelectorAll('.logo-img, .footer-logo-img, .sobre-logo');
    
    logoImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.display = 'block';
            // Esconde texto alternativo se a logo carregar
            const logoText = this.nextElementSibling;
            if (logoText && logoText.classList.contains('logo-text')) {
                logoText.style.display = 'none';
            }
        });
        
        img.addEventListener('error', function() {
            // Se a logo não carregar, mantém o texto
            this.style.display = 'none';
        });
    });
    
    // ========================================
    // MOSTRA FOTO DO TÉCNICO SE EXISTIR
    // ========================================
    
    const tecnicoImages = document.querySelectorAll('.tecnico-img');
    
    tecnicoImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.display = 'block';
            // Esconde placeholder
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('foto-placeholder')) {
                placeholder.style.display = 'none';
            }
        });
        
        img.addEventListener('error', function() {
            // Se a foto não carregar, mantém o placeholder
            this.style.display = 'none';
        });
    });
    
    // ========================================
    // VALIDAÇÃO DE LINKS DE CONTATO
    // ========================================
    
    const contatoCards = document.querySelectorAll('.contato-card');
    
    contatoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Previne navegação se for link placeholder
            if (href === '#' || href === 'mailto:seu-email@exemplo.com' || href === 'tel:+5500000000000') {
                e.preventDefault();
                alert('Por favor, adicione seu link de contato no código HTML! Procure por "ADICIONE SEU LINK AQUI" no arquivo index.html');
            }
        });
    });
    
    // ========================================
    // MENSAGEM DE BOAS-VINDAS NO CONSOLE
    // ========================================
    
    console.log('%c🚀 AH.TI - Assistência Técnica', 'font-size: 20px; color: #8B5CF6; font-weight: bold;');
    console.log('%cSite desenvolvido com dedicação por Levy & Lucas', 'color: #10B981;');
    console.log('%cPara editar o site, procure os comentários no código!', 'color: #CBD5E1;');
    
});

/* ========================================
   FUNÇÕES AUXILIARES
   ======================================== */

// Função para copiar texto (útil para copiar contatos)
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado: ' + texto);
    }).catch(function(err) {
        console.error('Erro ao copiar texto:', err);
    });
}

// Função para abrir WhatsApp (útil quando adicionar o número)
function abrirWhatsApp(numero, mensagem = 'Olá! Gostaria de saber mais sobre os serviços da AH.TI.') {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
