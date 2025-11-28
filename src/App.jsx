import React, { useState } from 'react';
import { GraduationCap, Briefcase, TrendingUp, MapPin, ChevronRight, CheckCircle2, XCircle, Sparkles, Users, Award, Clock, Star, ArrowRight, Target, BookOpen, Zap } from 'lucide-react';

const cursosData = [
  {
    "Posição": 1,
    "Curso Superior": "Pedagogia",
    "Área de Conhecimento": "Educação",
    "Destaque": "Lidera em matrículas EAD.",
    "tags": ["educacao", "presencial", "ead"]
  },
  {
    "Posição": 2,
    "Curso Superior": "Administração",
    "Área de Conhecimento": "Gestão e Negócios",
    "Destaque": "Forte presença em todas as modalidades.",
    "tags": ["gestao", "presencial", "ead"]
  },
  {
    "Posição": 3,
    "Curso Superior": "Direito",
    "Área de Conhecimento": "Jurídica",
    "Destaque": "Tradicional, alta busca e concorrência.",
    "tags": ["juridica", "presencial"]
  },
  {
    "Posição": 4,
    "Curso Superior": "Enfermagem",
    "Área de Conhecimento": "Saúde",
    "Destaque": "Elevado número de matrículas.",
    "tags": ["saude", "presencial"]
  },
  {
    "Posição": 5,
    "Curso Superior": "Psicologia",
    "Área de Conhecimento": "Saúde",
    "Destaque": "Alta busca pela área.",
    "tags": ["saude", "presencial"]
  },
  {
    "Posição": 6,
    "Curso Superior": "Análise e Desenvolvimento de Sistemas",
    "Área de Conhecimento": "Tecnologia e TI",
    "Destaque": "Cursos com excelentes oportunidades no mercado.",
    "tags": ["tecnologia", "ead", "presencial"]
  },
  {
    "Posição": 7,
    "Curso Superior": "Gestão de Pessoas e RH",
    "Área de Conhecimento": "Gestão e Negócios",
    "Destaque": "Alta demanda em empresas de pequeno e grande porte.",
    "tags": ["gestao", "ead", "presencial"]
  },
  {
    "Posição": 8,
    "Curso Superior": "Fisioterapia",
    "Área de Conhecimento": "Saúde",
    "Destaque": "Alta demanda e excelente empregabilidade.",
    "tags": ["saude", "presencial"]
  },
  {
    "Posição": 9,
    "Curso Superior": "Fonoaudiologia",
    "Área de Conhecimento": "Saúde",
    "Destaque": "Considerada uma das áreas com melhores salários.",
    "tags": ["saude", "presencial"]
  },
  {
    "Posição": 10,
    "Curso Superior": "Gestão Ambiental",
    "Área de Conhecimento": "Gestão e Sustentabilidade",
    "Destaque": "Importância crescente nas empresas com foco no futuro.",
    "tags": ["gestao", "sustentabilidade", "ead", "presencial"]
  },
  {
    "Posição": 11,
    "Curso Superior": "Arquitetura e Urbanismo",
    "Área de Conhecimento": "Engenharia e Design",
    "Destaque": "Alta procura e boa empregabilidade.",
    "tags": ["design", "engenharia", "presencial"]
  },
  {
    "Posição": 12,
    "Curso Superior": "Engenharia de Software",
    "Área de Conhecimento": "Tecnologia e TI",
    "Destaque": "Alta demanda e excelência profissional.",
    "tags": ["tecnologia", "ead", "presencial"]
  },
  {
    "Posição": 13,
    "Curso Superior": "Design Gráfico",
    "Área de Conhecimento": "Comunicação e Design",
    "Destaque": "Alta procura em todas as modalidades.",
    "tags": ["design", "criativo", "ead", "presencial"]
  },
  {
    "Posição": 14,
    "Curso Superior": "Rede de Computadores",
    "Área de Conhecimento": "Tecnologia e TI",
    "Destaque": "Alta empregabilidade e forte presença no mercado.",
    "tags": ["tecnologia", "ead", "presencial"]
  },
  {
    "Posição": 15,
    "Curso Superior": "Marketing Digital",
    "Área de Conhecimento": "Comunicação digital e Moda",
    "Destaque": "Alta demanda e relevância no mundo digital e da moda.",
    "tags": ["marketing", "criativo", "ead", "presencial"]
  },
  {
    "Posição": 16,
    "Curso Superior": "Moda",
    "Área de Conhecimento": "Design e Moda",
    "Destaque": "Retomada forte da área com excelentes oportunidades.",
    "tags": ["design", "criativo", "presencial"]
  },
  {
    "Posição": 17,
    "Curso Superior": "Ciência da Computação",
    "Área de Conhecimento": "Tecnologia e TI",
    "Destaque": "Alta empregabilidade e salários na área.",
    "tags": ["tecnologia", "presencial"]
  },
  {
    "Posição": 18,
    "Curso Superior": "Engenharia Elétrica",
    "Área de Conhecimento": "Engenharia e Design",
    "Destaque": "Boa empregabilidade e alta busca.",
    "tags": ["engenharia", "presencial"]
  },
  {
    "Posição": 19,
    "Curso Superior": "Marketing / Vendas",
    "Área de Conhecimento": "Comunicação e Negócios",
    "Destaque": "Forte relevância no mundo digital.",
    "tags": ["marketing", "gestao", "ead", "presencial"]
  },
  {
    "Posição": 20,
    "Curso Superior": "Agronomia",
    "Área de Conhecimento": "Saúde e Pesquisa",
    "Destaque": "Área em expansão, especialmente em pesquisa laboratorial.",
    "tags": ["saude", "pesquisa", "presencial"]
  }
];

const perguntas = [
  {
    id: 'area',
    pergunta: 'Qual área te interessa mais?',
    opcoes: [
      { label: 'Tecnologia e TI', value: 'tecnologia' },
      { label: 'Saúde', value: 'saude' },
      { label: 'Gestão e Negócios', value: 'gestao' },
      { label: 'Design e Criatividade', value: 'criativo' },
      { label: 'Educação', value: 'educacao' },
      { label: 'Engenharia', value: 'engenharia' },
    ]
  },
  {
    id: 'modalidade',
    pergunta: 'Qual modalidade você prefere?',
    opcoes: [
      { label: 'Presencial', value: 'presencial' },
      { label: 'EAD (Educação a Distância)', value: 'ead' },
      { label: 'Tanto faz', value: 'ambos' },
    ]
  },
  {
    id: 'objetivo',
    pergunta: 'O que é mais importante pra você?',
    opcoes: [
      { label: 'Salário alto', value: 'salario' },
      { label: 'Empregabilidade rápida', value: 'empregabilidade' },
      { label: 'Fazer o que gosto', value: 'paixao' },
      { label: 'Empreender', value: 'empreender' },
    ]
  }
];

export default function App() {
  const [etapa, setEtapa] = useState('landing');
  const [respostas, setRespostas] = useState({});
  const [cursosFiltrados, setCursosFiltrados] = useState([]);

  const handleResposta = (perguntaId, valor) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: valor }));
  };

  const calcularResultados = () => {
    let filtrados = cursosData;

    if (respostas.area) {
      filtrados = filtrados.filter(curso => 
        curso.tags?.includes(respostas.area)
      );
    }

    if (respostas.modalidade && respostas.modalidade !== 'ambos') {
      filtrados = filtrados.filter(curso => 
        curso.tags?.includes(respostas.modalidade)
      );
    }

    setCursosFiltrados(filtrados);
    setEtapa('resultados');
  };

  const reiniciar = () => {
    setEtapa('landing');
    setRespostas({});
    setCursosFiltrados([]);
  };

  // LANDING PAGE
  if (etapa === 'landing') {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-purple-700 via-blue-700 to-cyan-600 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-8 h-8 text-yellow-300" />
                <span className="text-yellow-300 font-bold text-lg">Ceilândia - DF</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Encontre Seu
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Futuro Profissional
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Descubra em 3 minutos qual curso superior é perfeito para você. 
                Baseado nos 20 cursos mais procurados do Brasil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setEtapa('quiz')}
                  className="group bg-white text-purple-700 font-bold py-5 px-10 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg"
                >
                  Iniciar Teste Gratuito
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white font-bold py-5 px-10 rounded-2xl hover:bg-white hover:text-purple-700 transition-all duration-300 text-lg"
                >
                  Ver Cursos Disponíveis
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white border-opacity-30">
                <div className="text-4xl font-black text-white mb-2">20</div>
                <div className="text-blue-100 font-semibold">Cursos Top</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white border-opacity-30">
                <div className="text-4xl font-black text-white mb-2">3min</div>
                <div className="text-blue-100 font-semibold">Teste Rápido</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white border-opacity-30">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-blue-100 font-semibold">Gratuito</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white border-opacity-30">
                <div className="text-4xl font-black text-white mb-2">+5k</div>
                <div className="text-blue-100 font-semibold">Usuários</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Por que usar nossa plataforma?
            </h2>
            <p className="text-xl text-gray-600">
              Ajudamos você a tomar a melhor decisão para seu futuro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalizado</h3>
              <p className="text-gray-700 leading-relaxed">
                Teste inteligente que analisa seu perfil, interesses e objetivos para recomendar os melhores cursos.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rápido e Fácil</h3>
              <p className="text-gray-700 leading-relaxed">
                Em apenas 3 minutos você descobre quais cursos combinam perfeitamente com você. Simples assim!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dados Reais</h3>
              <p className="text-gray-700 leading-relaxed">
                Informações atualizadas sobre empregabilidade, salários e demanda do mercado de trabalho.
              </p>
            </div>
          </div>
        </div>

        {/* Como Funciona */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Como Funciona?
              </h2>
              <p className="text-xl text-gray-600">
                Três passos simples para encontrar seu curso ideal
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Responda o Quiz</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perguntas simples sobre seus interesses, preferências de estudo e objetivos profissionais.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Análise Inteligente</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nosso sistema cruza suas respostas com dados de mercado para encontrar os melhores matches.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Receba Resultados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lista personalizada de cursos com informações sobre empregabilidade e oportunidades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cursos Destaque */}
        <div id="cursos" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Top 6 Cursos Mais Procurados
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos cursos com maior demanda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosData.slice(0, 6).map((curso) => (
              <div key={curso.Posição} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold py-1.5 px-3 rounded-full">
                    #{curso.Posição}
                  </span>
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {curso["Curso Superior"]}
                </h3>
                <p className="text-purple-700 font-semibold mb-3 text-sm">
                  {curso["Área de Conhecimento"]}
                </p>
                <p className="text-gray-600 text-sm">
                  {curso.Destaque}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => setEtapa('quiz')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
            >
              Ver Todos os Cursos
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-600 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pronto para Descobrir Seu Futuro?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Milhares de pessoas já encontraram o curso perfeito. Sua vez é agora!
            </p>
            <button
              onClick={() => setEtapa('quiz')}
              className="bg-white text-purple-700 font-bold py-5 px-12 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              Começar Agora Grátis
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // QUIZ
  if (etapa === 'quiz') {
    const perguntaAtual = perguntas.find(p => !respostas[p.id]);
    const progresso = (Object.keys(respostas).length / perguntas.length) * 100;

    if (!perguntaAtual) {
      calcularResultados();
      return null;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progresso</span>
              <span>{Math.round(progresso)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progresso}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {perguntaAtual.pergunta}
          </h2>

          <div className="space-y-4">
            {perguntaAtual.opcoes.map((opcao) => (
              <button
                key={opcao.value}
                onClick={() => handleResposta(perguntaAtual.id, opcao.value)}
                className="w-full bg-gray-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 border-2 border-gray-200 hover:border-purple-400 rounded-xl p-5 text-left transition-all duration-200 transform hover:scale-102 hover:shadow-md"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {opcao.label}
                </span>
              </button>
            ))}
          </div>

          {Object.keys(respostas).length > 0 && (
            <button
              onClick={() => {
                const keys = Object.keys(respostas);
                const newRespostas = { ...respostas };
                delete newRespostas[keys[keys.length - 1]];
                setRespostas(newRespostas);
              }}
              className="mt-6 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Voltar
            </button>
          )}
        </div>
      </div>
    );
  }

  // RESULTADOS
  if (etapa === 'resultados') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-6">
            <div className="text-center mb-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Seus Cursos Ideais!
              </h1>
              <p className="text-lg text-gray-600">
                Encontramos {cursosFiltrados.length} curso{cursosFiltrados.length !== 1 ? 's' : ''} perfeito{cursosFiltrados.length !== 1 ? 's' : ''} para você
              </p>
            </div>

            {cursosFiltrados.length === 0 ? (
              <div className="text-center py-12">
                <XCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-6">
                  Não encontramos cursos com esses critérios específicos.
                </p>
                <button
                  onClick={reiniciar}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Tentar Novamente
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {cursosFiltrados.map((curso) => (
                    <div
                      key={curso.Posição}
                      className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                              #{curso.Posição}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-800">
                              {curso["Curso Superior"]}
                            </h3>
                          </div>
                          <p className="text-purple-700 font-semibold mb-2">
                            {curso["Área de Conhecimento"]}
                          </p>
                        </div>
                        <GraduationCap className="w-10 h-10 text-purple-600 flex-shrink-0" />
                      </div>
                      <p className="text-gray-700 flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        {curso.Destaque}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={reiniciar}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                >
                  Fazer Novo Quiz
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}