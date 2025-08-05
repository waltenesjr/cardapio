// Atualizar data atual no footer
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    document.getElementById('currentDate').textContent = formattedDate;
}

// Animação suave para os itens do menu quando carregam
function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// Adicionar animação CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .menu-item:hover .item-price {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
    
    .category-title:hover i {
        transform: rotate(360deg);
        transition: transform 0.5s ease;
    }
    
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);

// Adicionar efeito de toque para dispositivos móveis
function addTouchEffects() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        item.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Função para detectar se é um dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Otimizações para PWA (Progressive Web App)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentDate();
    animateMenuItems();
    
    if (isMobile()) {
        addTouchEffects();
        // Adicionar classe para estilos específicos de mobile
        document.body.classList.add('mobile-device');
    }
    
    // Atualizar a data a cada minuto
    setInterval(updateCurrentDate, 60000);
    
    // Adicionar efeito de carregamento suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Função para compartilhamento (se suportado pelo navegador)
function shareMenu() {
    if (navigator.share) {
        navigator.share({
            title: 'Nosso Cardápio',
            text: 'Confira nosso delicioso cardápio!',
            url: window.location.href
        });
    }
}

// Easter egg: double tap no logo para mostrar uma mensagem especial
let tapCount = 0;
document.querySelector('.logo').addEventListener('click', function() {
    tapCount++;
    if (tapCount === 2) {
        const message = document.createElement('div');
        message.innerHTML = '🎉 Obrigado por visitar nosso cardápio! 🎉';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6b6b, #ffa500);
            color: white;
            padding: 20px;
            border-radius: 15px;
            font-weight: 600;
            font-size: 1.1rem;
            z-index: 1000;
            animation: bounce 0.5s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
            tapCount = 0;
        }, 3000);
    }
    
    setTimeout(() => {
        tapCount = 0;
    }, 1000);
});
