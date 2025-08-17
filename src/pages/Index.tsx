import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Анна Кузнецова</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-purple-400 transition-colors">О себе</a>
              <a href="#showreel" className="text-white/80 hover:text-purple-400 transition-colors">Шоурил</a>
              <a href="#portfolio" className="text-white/80 hover:text-purple-400 transition-colors">Работы</a>
              <a href="#materials" className="text-white/80 hover:text-purple-400 transition-colors">Материалы</a>
              <a href="#contact" className="text-white/80 hover:text-purple-400 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                alt="Анна Кузнецова" 
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-purple-500/30 shadow-2xl"
              />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
              Анна Кузнецова
            </h1>
            <p className="text-2xl text-purple-300 mb-6">Актриса театра и кино</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Профессиональная актриса с опытом работы в театре и кино. 
              Открыта для новых проектов и сотрудничества с режиссерами и продюсерами.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть шоурил
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-3">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white font-['Playfair_Display'] mb-12 text-center">
            О себе
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Образование</h3>
                <p className="text-white/90 mb-6">
                  РАТИ-ГИТИС, курс Константина Райкина<br/>
                  2018-2022, Мастер актёрского искусства
                </p>
                
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Физические данные</h4>
                <div className="grid grid-cols-2 gap-4 text-white/80 mb-6">
                  <div>Рост: 168 см</div>
                  <div>Вес: 55 кг</div>
                  <div>Глаза: карие</div>
                  <div>Волосы: тёмно-русые</div>
                </div>

                <h4 className="text-xl font-semibold text-purple-400 mb-3">Навыки</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Драматическое искусство</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Комедия</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Импровизация</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Вокал</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Танцы</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Верховая езда</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">Автовождение</Badge>
                </div>

                <h4 className="text-xl font-semibold text-purple-400 mb-3">Языки</h4>
                <p className="text-white/80">Русский (родной), Английский (свободно), Французский (разговорный)</p>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white/5 border-purple-500/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Театральный опыт</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• "Три сестры" - Ирина (Театр им. Вахтангова)</li>
                      <li>• "Гамлет" - Офелия (РАТИ)</li>
                      <li>• "Вишнёвый сад" - Аня (МХАТ им. Горького)</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 border-purple-500/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Кинематографический опыт</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• "Последний рассвет" - главная роль (2023)</li>
                      <li>• "Московские истории" - эпизод (2022)</li>
                      <li>• "Время перемен" - второй план (2024)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showreel */}
      <section id="showreel" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white font-['Playfair_Display'] mb-12 text-center">
            Видеопробы и шоурил
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-purple-500/20 overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Play" size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Драматический монолог</h3>
                    <p className="text-white/70 text-sm">Отрывок из "Трёх сестёр" Чехова</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20 overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Play" size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Комедийная сцена</h3>
                    <p className="text-white/70 text-sm">Импровизация и комедийное мастерство</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20 overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-pink-600 to-red-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Play" size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Основной шоурил</h3>
                    <p className="text-white/70 text-sm">Подборка лучших моментов из фильмов</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white font-['Playfair_Display'] mb-12 text-center">
            Портфолио
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-purple-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                      alt="Кадр из фильма"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">"Последний рассвет"</h3>
                    <p className="text-white/80 mb-3">Главная роль - Мария</p>
                    <div className="flex items-center text-sm text-white/60">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      2023
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800&auto=format&fit=crop"
                      alt="Театральная роль"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">"Три сестры"</h3>
                    <p className="text-white/80 mb-3">Роль Ирины - Театр им. Вахтангова</p>
                    <div className="flex items-center text-sm text-white/60">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      2022-2023
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
                      alt="Фотосессия"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Профессиональные фото</h3>
                    <p className="text-white/80 mb-3">Портретная и художественная съёмка</p>
                    <div className="flex items-center text-sm text-white/60">
                      <Icon name="Camera" size={16} className="mr-2" />
                      2024
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white font-['Playfair_Display'] mb-12 text-center">
            Материалы для скачивания
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Icon name="FileText" size={48} className="mx-auto text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Резюме актёра</h3>
                  <p className="text-white/70 mb-6">Полная информация об образовании, опыте работы и навыках</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Icon name="Image" size={48} className="mx-auto text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Фотопортфолио</h3>
                  <p className="text-white/70 mb-6">Профессиональные фотографии высокого разрешения</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать архив
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Icon name="Video" size={48} className="mx-auto text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Видеоматериалы</h3>
                  <p className="text-white/70 mb-6">Шоурил и отдельные видеопробы для просмотра офлайн</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать видео
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Icon name="Folder" size={48} className="mx-auto text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Полный пакет</h3>
                  <p className="text-white/70 mb-6">Все материалы одним архивом для агентов и кастинг-директоров</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать всё
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white font-['Playfair_Display'] mb-12 text-center">
            Связаться со мной
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-6">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" size={20} className="text-purple-400 mr-4" />
                    <span className="text-white">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={20} className="text-purple-400 mr-4" />
                    <span className="text-white">anna.kuznetsova@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={20} className="text-purple-400 mr-4" />
                    <span className="text-white">Москва, Россия</span>
                  </div>
                </div>

                <Separator className="my-8 bg-purple-500/20" />

                <h4 className="text-xl font-semibold text-purple-400 mb-4">Социальные сети</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-purple-500 text-purple-300 hover:bg-purple-500/20">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-purple-500 text-purple-300 hover:bg-purple-500/20">
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-purple-500 text-purple-300 hover:bg-purple-500/20">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                </div>
              </div>

              <Card className="bg-white/5 border-purple-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Написать сообщение</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-white/80 mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-md text-white placeholder-white/50 focus:border-purple-400 focus:outline-none"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-md text-white placeholder-white/50 focus:border-purple-400 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Компания/Проект</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-md text-white placeholder-white/50 focus:border-purple-400 focus:outline-none"
                        placeholder="Название компании или проекта"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-md text-white placeholder-white/50 focus:border-purple-400 focus:outline-none resize-none"
                        placeholder="Расскажите о проекте или роли..."
                      />
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Анна Кузнецова. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}