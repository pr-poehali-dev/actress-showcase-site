import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-dramatic-black text-dramatic-gray">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dramatic-black/95 backdrop-blur-sm border-b border-dramatic-dark">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-dramatic-gold font-['Playfair_Display']">Элина Кондратьева</h1>
            <div className="flex items-center space-x-8">
              <a href="#biography" className="hover:text-dramatic-gold transition-colors">Биография</a>
              <a href="#portfolio" className="hover:text-dramatic-gold transition-colors">Портфолио</a>
              <a href="#videos" className="hover:text-dramatic-gold transition-colors">Видеопробы</a>
              <a href="#events" className="hover:text-dramatic-gold transition-colors">Афиша</a>
              <a href="#contact" className="hover:text-dramatic-gold transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl font-bold text-dramatic-gold font-['Playfair_Display'] leading-tight">
                  Актриса
                </h2>
                <h3 className="text-4xl lg:text-5xl font-light text-dramatic-gray font-['Playfair_Display']">
                  театра и кино
                </h3>
              </div>
              
              <p className="text-xl text-dramatic-gray/80 leading-relaxed font-light">
                Профессиональная актриса с многолетним опытом работы в театре и кино. 
                Готова к новым вызовам и ярким ролям.
              </p>
              
              <div className="flex items-center space-x-4">
                <Button className="bg-dramatic-gold hover:bg-dramatic-accent text-dramatic-black font-semibold px-8 py-3 text-lg">
                  Смотреть пробы
                </Button>
                <Button variant="outline" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold hover:text-dramatic-black px-8 py-3 text-lg">
                  Скачать резюме
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="text-dramatic-gold" size={20} />
                  <span className="text-sm">15+ ролей</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="text-dramatic-gold" size={20} />
                  <span className="text-sm">ИСИ, музыкальный театр</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Film" className="text-dramatic-gold" size={20} />
                  <span className="text-sm">8 фильмов</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/img/152b0da5-e8cd-4c33-a8d2-891d657792ef.jpg" 
                  alt="Анна Селезнёва - профессиональный портрет"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-dramatic-gold to-dramatic-accent rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section id="biography" className="py-20 bg-dramatic-dark/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
              Биография
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-dramatic-gold font-['Playfair_Display']">
                  Образование
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-dramatic-gold pl-4">
                    <h4 className="font-semibold text-lg">ИСИ</h4>
                    <p className="text-dramatic-gray/80">Факультет музыкального театра, 2021-2025</p>
                    <p className="text-sm text-dramatic-gray/60">Мастер: Егор Владиславович Дружинин</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-dramatic-gold font-['Playfair_Display']">
                  Навыки
                </h3>
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
            
            <Separator className="my-12 bg-dramatic-gold/20" />
            
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
      </section>

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
                    src="/img/41cc3f8a-a9cb-4234-91a4-62ae0e69b0f6.jpg"
                    alt="Театральная постановка"
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
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="/img/152b0da5-e8cd-4c33-a8d2-891d657792ef.jpg"
                    alt="Фотосессия"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dramatic-gold mb-2">Фотосессия</h3>
                  <p className="text-dramatic-gray/80 mb-3">Профессиональные портреты</p>
                  <div className="flex items-center text-sm text-dramatic-gray/60">
                    <Icon name="Camera" size={16} className="mr-2" />
                    Портфолио
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Reels */}
      <section id="videos" className="py-20 bg-dramatic-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
            Видеопробы
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-dramatic-dark border-dramatic-gold/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-dramatic-black rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-dramatic-gold/30">
                  <div className="text-center">
                    <Icon name="Play" size={48} className="text-dramatic-gold mx-auto mb-2" />
                    <p className="text-dramatic-gray">Драматическая проба</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dramatic-gold mb-2">Монолог из «Анны Карениной»</h3>
                <p className="text-dramatic-gray/80">Эмоциональная сцена расставания</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dramatic-dark border-dramatic-gold/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-dramatic-black rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-dramatic-gold/30">
                  <div className="text-center">
                    <Icon name="Play" size={48} className="text-dramatic-gold mx-auto mb-2" />
                    <p className="text-dramatic-gray">Комедийная проба</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dramatic-gold mb-2">Сцена из современной пьесы</h3>
                <p className="text-dramatic-gray/80">Демонстрация комедийного таланта</p>
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
                    <h3 className="text-2xl font-semibold text-dramatic-gold mb-2">«Дом Бернарды Альбы»</h3>
                    <p className="text-dramatic-gray mb-2">Роль Магдалены</p>
                    <p className="text-dramatic-gray/70 mb-4">Арт-центр ИСИ</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">4 ноября </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-2 text-dramatic-gold" />
                        19:00
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" size={16} className="mr-2 text-dramatic-gold" />
                        Москва
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold hover:text-dramatic-black">
                    Билеты
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-dramatic-dark border-dramatic-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-dramatic-gold mb-2">Кастинг «Новый проект»</h3>
                    <p className="text-dramatic-gray mb-2">Главная женская роль</p>
                    <p className="text-dramatic-gray/70 mb-4">Режиссёр: А. Звягинцев</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={16} className="mr-2 text-dramatic-gold" />
                        5 октября
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-2 text-dramatic-gold" />
                        14:00
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" size={16} className="mr-2 text-dramatic-gold" />
                        Киностудия
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-dramatic-gold text-dramatic-black">Подтверждено</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-dramatic-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-dramatic-gold font-['Playfair_Display'] mb-12 text-center">
            Контакты
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-dramatic-dark border-dramatic-gold/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-dramatic-gold font-['Playfair_Display']">
                      Для сотрудничества
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" className="text-dramatic-gold" size={20} />
                        <span>+7 (999) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" className="text-dramatic-gold" size={20} />
                        <span>anna.selezneva@email.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Instagram" className="text-dramatic-gold" size={20} />
                        <span>@anna_selezneva_actress</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" className="text-dramatic-gold" size={20} />
                        <span>Москва, Россия</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-dramatic-gold font-['Playfair_Display']">
                      Агент
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Мария Петрова</p>
                        <p className="text-dramatic-gray/70">Актёрское агентство "Звезда"</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" className="text-dramatic-gold" size={20} />
                        <span>+7 (495) 987-65-43</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" className="text-dramatic-gold" size={20} />
                        <span>m.petrova@zvezda-agency.ru</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8 bg-dramatic-gold/20" />
                
                <div className="text-center">
                  <p className="text-dramatic-gray/80 mb-6">
                    Открыта для новых проектов в театре и кино. 
                    Готова к переездам и длительным съёмкам.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button className="bg-dramatic-gold hover:bg-dramatic-accent text-dramatic-black font-semibold">
                      Связаться
                    </Button>
                    <Button variant="outline" className="border-dramatic-gold text-dramatic-gold hover:bg-dramatic-gold hover:text-dramatic-black">
                      Скачать портфолио
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-dramatic-dark">
        <div className="container mx-auto px-6">
          <div className="text-center text-dramatic-gray/60">
            <p>&copy; 2024 Анна Селезнёва. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}