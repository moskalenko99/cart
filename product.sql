-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 01, 2020 at 12:30 PM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) UNSIGNED NOT NULL,
  `photo` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `text` text NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `photo`, `title`, `text`, `price`) VALUES
(1, 'images/apple.png', 'Lorem ipsum dolor sit amet.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae in ipsum reprehenderit repellat quisquam eaque! Ab vero consectetur voluptatum.', 15),
(2, 'images/cherry.png', 'Lorem ipsum dolor sit amet.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae in ipsum reprehenderit repellat quisquam eaque! Ab vero consectetur voluptatum.', 15),
(3, 'images/lemon.png', 'Lorem ipsum dolor sit amet.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae in ipsum reprehenderit repellat quisquam eaque! Ab vero consectetur voluptatum.', 15),
(4, 'images/tomato.png', 'Lorem ipsum dolor sit amet.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae in ipsum reprehenderit repellat quisquam eaque! Ab vero consectetur voluptatum.', 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
