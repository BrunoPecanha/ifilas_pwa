# iFilas Web (PWA)

Interface web leve (PWA) do sistema iFilas, focada na entrada rápida de clientes em filas e agendamentos através de links diretos de estabelecimentos.

## 🎯 Objetivo

Permitir que clientes acessem filas ou agendem atendimentos sem necessidade de cadastro ou instalação do aplicativo, proporcionando uma experiência rápida e sem fricção.

## 🚀 Funcionalidades principais

- Entrada direta via link do estabelecimento
- Seleção de serviços e forma de pagamento
- Inserção automática em filas ou agendas
- Acompanhamento básico da posição e tempo estimado
- Identificação anônima do usuário via GUID (persistido no dispositivo)
- Suporte a múltiplas filas por dispositivo
- Interface adaptada para mobile e desktop

## 📱 Mobile-first

A aplicação é otimizada para dispositivos móveis, oferecendo o fluxo completo de entrada e acompanhamento de filas.

## 💻 Desktop

No desktop, a aplicação atua como suporte, permitindo:
- Visualização básica
- Geração de QR Code para continuar no celular
- Orientação para melhor experiência mobile

## 🧠 Arquitetura

- Frontend: Angular + Ionic (PWA)
- Backend: Integração com API `ifilas_api`
- Identificação: GUID persistido no localStorage
- Comunicação: REST (polling para atualização de status)

## 🔗 Integração com o ecossistema

- `ifilas_app`: Aplicativo mobile completo (Android/iOS)
- `ifilas_api`: Backend e regras de negócio
- `ifilas_web`: Porta de entrada rápida e sem fricção
