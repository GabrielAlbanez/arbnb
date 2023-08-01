-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Jul-2023 às 11:08
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crudmovie`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `dataAno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `movies`
--

INSERT INTO `movies` (`id`, `name`, `director`, `img`, `dataAno`) VALUES
(2, 'mudei agora', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:39:13 GMT'),
(3, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:40:25 GMT'),
(4, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:05 GMT'),
(5, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:17 GMT'),
(6, 'mudei agora', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:19 GMT'),
(7, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:25 GMT'),
(8, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:26 GMT'),
(9, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:27 GMT'),
(10, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:28 GMT'),
(11, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:42:44 GMT'),
(14, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:43:39 GMT'),
(15, 'gabreil', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 03:57:54 GMT'),
(16, 'ola', 'danilo', 'dsadasdadadadsad', 'Sat, 29 Jul 2023 04:04:49 GMT');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `cpf`, `email`) VALUES
(3, 'gaaaaa', '1234', '52998224725', 'gabriel.g.albanez@gmail.com'),
(4, 'gabriel', '1234', '4732131231', 'gabriel.g.albanez@gmail.com'),
(5, 'gaaaaa', '1234', '4732131231', 'gabriel.g.albanez@gmail.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
