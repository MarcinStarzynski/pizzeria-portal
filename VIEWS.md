# Dashboard

- `/`
  - statystyki zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów na dzień

# Logowanie

- `/login`
  - pola loginu i hasła
  - guzik zalogowania (link do dashboardu)

# Dostępność stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji i wydarzeń
    - kolumna = stolik
    - wiersz = 30 minut
    - wygląd tygodnia w kalendarzu googla
    - wyświetlenie szczegółów po kliknięciu w konkretne pole
- `/tables/booking/:id`
  - zawiera informacje o rezerwacji
  - umożliwia edycję informacji
- `/tables/booking/new`
  - umożliwia stworzenie nowego wydarzenia
- `/tables/events/:id`
  - zawiera informacje o evencie
  - umożliwia edycję informacji
- `/tables/events/new`
  - umożliwia stworzenie nowego eventu

# Widok kelnera

- `/waiter`
  - tabela
    - wiersze = stoliki
    - kolumny = informacje (status oraz czas od ostatniej aktywności)
    - akcje dostępne dla stolika
- `/waiter/order/new`
  - numer stolika (możliwość edycji)
  - menu produktów
  - opcje produktów
  - zamówienie
  - kwota zamówienia
- `/waiter/order/id`
  - jak wyżej

# Widok kuchni

- `/kitchen`
  - dostępna lista zamówień wraz z kolejnością złożenia
    - lista zawiera numer stolika
    - lista zawiera informacje o zamówieniu
  - możliwość zmiany statusu zamówienia
