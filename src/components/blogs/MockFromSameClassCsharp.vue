<template>
    <h1>How to mock a function form the same Class with <a href="https://moq.github.io/moq4/">moq</a></h1>
    <div class="code-block">
        <a class="text">Disclaimer: I want to show you what is possible, I strongly recommend not mocking a function from the same class because you should probably extract the function in a different class.
             But here is a possible solution anyway.
        </a>
        <br/><br/>
        <a class="text">Suppose we have the NumberGenerator class with an interface with two functions and want to mock GetNumberFive, so that the function returns 4.
             The desired function must be virtual because moq must override the function and this is only possible if you make a function <b>virtual</b> in C#.</a>
        <pre><code class="language-csharp">
public class NumberGenerator : INumberGenerator
{
    public virtual int GetNumberFive()
    {
        return 5;
    }

    public int MultiplyTwoWithValueFromGetNumberFive()
    {
        return 2 * GetNumberFive();
    }
}
        </code></pre>
        <br/>
        <a class="text">Now lets look at the testing code.</a>
       <pre><code class="language-csharp">
public class Tests
{
    private NumberGenerator _numberGenerator = null!;
    private Mock&lt;NumberGenerator&gt; _numberGeneratorMock = null!;

    [SetUp]
    public void Setup()
    {
        _numberGenerator = new NumberGenerator();
        _numberGeneratorMock = new Mock&lt;NumberGenerator&gt;
        {
            CallBase = true
        };
    }
        </code></pre>
        <a class="text">We created two NumberGenerator to test our code. When you want to mock a function from the same class, you have to use the _numberGeneratorMock. The trick is to set <b>CallBase</b> true,
            because it is used to specify whether the base class virtual implementation will be invoked for mocked dependencies.</a>
        <br/><br/>
        <a class="text">So our normal tests looks like this:</a>
        <pre><code class="language-csharp">
    [Test]
    public void Test1_GetNumberFive()
    {
        var num = _numberGenerator.GetNumberFive();
        
        Assert.AreEqual(5, num);
    }
    
    [Test]
    public void Test2_MultiplyTwoWithValueFromGetNumberFive()
    {
        var num = _numberGenerator.MultiplyTwoWithValueFromGetNumberFive();
        
        Assert.AreEqual(10, num);
    }
        </code></pre>

        <br/>
    <a class="text">And our test with <b>_numberGeneratorMock</b> can look like this:</a>
    <pre><code class="language-csharp">
    [Test]
    public void Test3_MultiplyTwoWithValueFromGetNumberFive_MockFunction()
    {
        // assign
        _numberGeneratorMock.Setup(n => n.GetNumberFive()).Returns(4);
        
        // act
        var num = _numberGeneratorMock.Object.MultiplyTwoWithValueFromGetNumberFive();

        // assert
        Assert.AreEqual(8, num);
    }
        </code></pre>
        <a class="text">Here you use the <b>Setup</b> method as usual (when using moq). And in the act step you need to acces the <b>Object</b> from your mocked class which you want to test.</a>
        <p>Feel free to let me know how you liked the blog or want to give me feedback <a class="eml-protected" href="mailto:danielwaechtler@protonmail.com">danielwaechtler@protonmail.com</a></p>

    </div>
    
</template>
    
<style scoped>
.text{
    font-family: Times New Roman, Helvetica, sans-serif;
}
h1{
    text-align:center;
}
</style>