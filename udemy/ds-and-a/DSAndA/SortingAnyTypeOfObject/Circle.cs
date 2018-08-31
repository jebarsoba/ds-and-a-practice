﻿using System;

namespace DSAndA.SortingAnyTypeOfObject
{
    public class Circle : IComparable<Circle>
    {
        public double Radius { get; private set; }

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public static bool operator >(Circle circle1, Circle circle2)
        {
            return circle1.Radius > circle2.Radius;
        }

        public static bool operator <(Circle circle1, Circle circle2)
        {
            return circle1.Radius < circle2.Radius;
        }

        public int CompareTo(Circle circle)
        {
            return Radius.CompareTo(circle.Radius);
        }
    }
}