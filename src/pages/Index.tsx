import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-dramatic-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dramatic-dark/95 backdrop-blur-sm z-50 border-b border-dramatic-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-dramatic-gold font-['Playfair_Display']">Анна Кузнецова</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-dramatic-gray hover:text-dramatic-gold transition-colors">О себе</a>
              <a href="#portfolio" className="text-dramatic-gray hover:text-dramatic-gold transition-colors">Портфолио</a>
              <a href="#events" className="text-dramatic-gray hover:text-dramatic-gold transition-colors">Афиша</a>
              <a href="#contact" className="text-dramatic-gray hover:text-dramatic-gold transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dramatic-gold/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/img/0faaeb0c-2faf-4001-a7d7-4dfecc6751c0.jpg" 
                alt="Анна Кузнецова" 
                className="w-80 h-80 rounded-full mx-auto object-cover border-4 border-dramatic-gold/30 shadow-2xl"
              />
            </div>
            <h1 className="text-7xl font-bold text-dramatic-gold mb-4 font-['Playfair_Display']">
              Анна Кузнецова
            </h1>
            <p className="text-2xl text-dramatic-gray mb-6">Актриса музыкального театра</p>
            <p className="text-lg text-dramatic-gray/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Выпускница факультета музыкального театра ИСИ. Страстно увлекающаяся сценическим искусством, 
              поиском глубины персонажей и созданием незабываемых образов.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-dramatic-gold hover:bg-dramatic-gold/90 text-dramatic-dark font-semibold px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть выступления
              </Button>
              <Button variant="outline" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold/10 px-8 py-3">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
            О себе
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-dramatic-gold mb-4">Образование</h3>
                  <div className="bg-dramatic-dark/50 p-6 rounded-lg border border-dramatic-gold/20">
                    <p className="text-dramatic-gray mb-2">
                      <strong className="text-dramatic-gold">ИСИ</strong> — Институт современного искусства
                    </p>
                    <p className="text-dramatic-gray/80 mb-2">
                      Факультет музыкального театра, 2021-2025
                    </p>
                    <p className="text-dramatic-gray/80">
                      Мастер: <strong className="text-dramatic-gold">Егор Владиславович Дружинин</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-dramatic-gold mb-3">Навыки и специализация</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Классическая драма</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Современная пьеса</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Киноактёрство</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Импровизация</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Пластика</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Вокал</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Танцы</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Скалолазание</Badge>
                    <Badge variant="outline" className="border-dramatic-gold text-dramatic-gold">Игра на барабанах</Badge>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-dramatic-gray/90 leading-relaxed max-w-3xl mx-auto">
                  С 2 месяцев я «жила» уже в театре, но никогда не мечтала стать актрисой. 
                  В итоге так не хотела, что потом 5 лет поступала в театральный. 
                  Каждая роль для меня — это возможность исследовать человеческую природу и донести 
                  до зрителя глубокие эмоции и смыслы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-dramatic-gold/20" />

      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
            Портфолио
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-dramatic-dark border-dramatic-gold/20 overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="/img/0faaeb0c-2faf-4001-a7d7-4dfecc6751c0.jpg"
                    alt="Театральная роль"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dramatic-gold mb-2">«Три сестры»</h3>
                  <p className="text-dramatic-gray/80 mb-3">Роль Ирины, музыкальный спектакль</p>
                  <div className="flex items-center text-sm text-dramatic-gray/60">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    2023
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-dramatic-dark border-dramatic-gold/20 overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="/img/0faaeb0c-2faf-4001-a7d7-4dfecc6751c0.jpg"
                    alt="Кинороль"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dramatic-gold mb-2">«Последний день»</h3>
                  <p className="text-dramatic-gray/80 mb-3">Главная роль, художественный фильм</p>
                  <div className="flex items-center text-sm text-dramatic-gray/60">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    2024
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dramatic-dark border-dramatic-gold/20 overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video bg-dramatic-gold/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-dramatic-gold/60 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dramatic-gold mb-2">Сцена из современной пьесы</h3>
                  <p className="text-dramatic-gray/80">Демонстрация комедийного таланта</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
            Афиша
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-dramatic-dark border-dramatic-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-dramatic-gold mb-2">«Чайка»</h3>
                    <p className="text-dramatic-gray mb-2">Роль Нины Заречной</p>
                    <p className="text-dramatic-gray/70 mb-4">Музыкальный театр ИСИ</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={16} className="mr-2 text-dramatic-gold" />
                        15-30 сентября
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-2 text-dramatic-gold" />
                        19:00
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold/10">
                    Билеты
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dramatic-dark border-dramatic-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-dramatic-gold mb-2">«Ромео и Джульетта»</h3>
                    <p className="text-dramatic-gray mb-2">Роль Джульетты</p>
                    <p className="text-dramatic-gray/70 mb-4">Музыкальный театр ИСИ</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={16} className="mr-2 text-dramatic-gold" />
                        10-25 октября
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-2 text-dramatic-gold" />
                        19:30
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold/10">
                    Билеты
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-dramatic-dark/50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
            Контакты
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-dramatic-gold mr-3" />
                <span className="text-dramatic-gray">anna.kuznetsova@theatre.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Phone" size={20} className="text-dramatic-gold mr-3" />
                <span className="text-dramatic-gray">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="MapPin" size={20} className="text-dramatic-gold mr-3" />
                <span className="text-dramatic-gray">Москва, Россия</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold/10">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold/10">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dramatic-dark/80 py-8 border-t border-dramatic-gold/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-dramatic-gray/60">
            © 2024 Анна Кузнецова. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}