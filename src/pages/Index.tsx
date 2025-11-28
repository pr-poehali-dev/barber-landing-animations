import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: 'Scissors',
      title: 'Мужская стрижка',
      description: 'Классические и современные стрижки',
      price: '1500 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Бритьё',
      description: 'Профессиональное бритьё опасной бритвой',
      price: '1200 ₽'
    },
    {
      icon: 'Brush',
      title: 'Уход за бородой',
      description: 'Моделирование и укладка бороды',
      price: '800 ₽'
    },
    {
      icon: 'Star',
      title: 'Комплекс',
      description: 'Стрижка + бритьё + уход за бородой',
      price: '2800 ₽'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/d26545a8-d2b4-45be-9844-dc0e91000068.jpg',
    'https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/de85061e-d8e6-4d09-b1a2-4df30b5b1d2d.jpg',
    'https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/44a6bc5f-50c9-4921-a2b4-2548eedcc0aa.jpg',
    'https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/d26545a8-d2b4-45be-9844-dc0e91000068.jpg',
    'https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/de85061e-d8e6-4d09-b1a2-4df30b5b1d2d.jpg',
    'https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/44a6bc5f-50c9-4921-a2b4-2548eedcc0aa.jpg'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">BARBERSHOP</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button size="sm" className="hidden md:block">Записаться</Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/9e4782a9-9d3d-4946-a64f-dedb6d77b942/files/44a6bc5f-50c9-4921-a2b4-2548eedcc0aa.jpg)' }}
        />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            СТИЛЬ И КАЧЕСТВО
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Профессиональная мужская стрижка и уход за бородой в центре города
          </p>
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contacts')}>
            Записаться на стрижку
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer bg-card border-border hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 text-primary">
                  <Icon name={service.icon as any} size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-primary text-xl font-bold">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Прайс-лист
          </h2>
          <Card className="p-8 bg-card">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-border pb-4 hover:border-primary transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-1">Мужская стрижка</h3>
                  <p className="text-sm text-muted-foreground">Классическая или модельная</p>
                </div>
                <span className="text-2xl font-bold text-primary">1500 ₽</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4 hover:border-primary transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-1">Бритьё</h3>
                  <p className="text-sm text-muted-foreground">Опасной бритвой с горячим полотенцем</p>
                </div>
                <span className="text-2xl font-bold text-primary">1200 ₽</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4 hover:border-primary transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-1">Моделирование бороды</h3>
                  <p className="text-sm text-muted-foreground">Стрижка и укладка бороды</p>
                </div>
                <span className="text-2xl font-bold text-primary">800 ₽</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4 hover:border-primary transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-1">Детская стрижка</h3>
                  <p className="text-sm text-muted-foreground">До 12 лет</p>
                </div>
                <span className="text-2xl font-bold text-primary">900 ₽</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Комплекс "Премиум"</h3>
                  <p className="text-sm text-muted-foreground">Стрижка + бритьё + борода + уход</p>
                </div>
                <span className="text-2xl font-bold text-primary">2800 ₽</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Наши работы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={48} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">ул. Пушкина, д. 10, Москва</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Часы работы</p>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@barbershop.ru</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8" size="lg">
                Записаться онлайн
              </Button>
            </Card>
            <Card className="p-0 overflow-hidden bg-card">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64f15b8f4f3f2e9e7e5e1f1f1f1f1f1f&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="min-h-[400px]"
                title="Карта"
              />
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 BARBERSHOP. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Увеличенное изображение"
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
