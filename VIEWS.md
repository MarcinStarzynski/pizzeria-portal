# Dashboard DONE

- `/`
  - statystyki zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów na dzień

# Logowanie DONE

- `/login`
  - pola loginu i hasła
  - guzik zalogowania (link do dashboardu)

# Dostępność stolików DONE

- `/tables` DONE
  - wybór daty i godziny
  - tabela z listą rezerwacji i wydarzeń
    - kolumna = stolik
    - wiersz = 30 minut
    - wygląd tygodnia w kalendarzu googla
    - wyświetlenie szczegółów po kliknięciu w konkretne pole
- `/tables/booking/:id` DONE
  - zawiera informacje o rezerwacji
  - umożliwia edycję informacji
- `/tables/booking/new` DONE
  - umożliwia stworzenie nowego wydarzenia
- `/tables/events/:id` DONE
  - zawiera informacje o evencie
  - umożliwia edycję informacji
- `/tables/events/new` DONE
  - umożliwia stworzenie nowego eventu

# Widok kelnera DONE

- `/waiter` DONE
  - tabela
    - wiersze = stoliki
    - kolumny = informacje (status oraz czas od ostatniej aktywności)
    - akcje dostępne dla stolika
- `/waiter/order/new` DONE
  - numer stolika (możliwość edycji)
  - menu produktów
  - opcje produktów
  - zamówienie
  - kwota zamówienia
- `/waiter/order/id` DONE
  - jak wyżej

# Widok kuchni DONE

- `/kitchen`
  - dostępna lista zamówień wraz z kolejnością złożenia
    - lista zawiera numer stolika
    - lista zawiera informacje o zamówieniu
  - możliwość zmiany statusu zamówienia
